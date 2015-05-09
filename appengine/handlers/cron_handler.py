import webapp2
from google.appengine.api import mail
from datetime import datetime, timedelta
from models.rosebotics_models import AutoSweep, RoseboticsStudent
from rosebotics_utils.progress_utils import get_csv_export_lists
import csv
import StringIO
import json

class CronJob(webapp2.RequestHandler):
	def get(self):
		if not self.request.headers['X-Appengine-Cron']:
			self.abort(403)
			return
		self.handle_job()

_tz_offsets = {'UTC':0, 'Pacific':-7, 'Mountain':-6, 'Central':-5, 'Eastern':-4}

class AutoSweepCronJob(CronJob):
	
	def handle_job(self):
		utc = datetime.utcnow()
		for tz, offset in _tz_offsets.items():
			time = datetime(utc.year, utc.month, utc.day , utc.hour) + timedelta(hours=offset)
			sweeps = AutoSweep.query(AutoSweep.time==time, AutoSweep.tz==tz)
			for sweep in sweeps:
				leader_email = sweep.key.parent().string_id()
				team_leader = RoseboticsStudent.get_by_id(leader_email)
				export_student_name = len(str(sweep.options.get("rose_username", ""))) > 0
				export_rose_username = len(str(sweep.options.get("rose_username", ""))) > 0
				team_urlsafe = sweep.options.get("team_urlsafe")
				timezone = sweep.options.get("timezone")
				course_progress = len(str(sweep.options.get("course_progress", ""))) > 0
				track_progress = len(str(sweep.options.get("track_progress", ""))) > 0
				unit_points = len(str(sweep.options.get("ppu", ""))) > 0
				ppu = float(sweep.options.get("ppu", "1"))
				ppt = float(sweep.options.get("ppt", "1"))
				data = json.loads(sweep.options.get("progress_data"))
				csv_data = get_csv_export_lists(team_leader, team_urlsafe, export_student_name, export_rose_username, unit_points, ppu, ppt, course_progress, track_progress, timezone, data)
				self.response.headers['Content-Type'] = 'application/csv'
				mem_stream = StringIO.StringIO()
				writer = csv.writer(mem_stream)
				for csv_row in csv_data:
					writer.writerow(csv_row)
				self.send_email(leader_email, "You've received an AutoSweep!", mem_stream.getvalue())
				mem_stream.close()

	def send_email(self, leader_email, msg, csv_file):
		email = mail.EmailMessage(sender="no-reply@roseboticsweb.appspotmail.com")
		email.to = str(leader_email)
		email.subject = "ROSEbotics Auto Sweep"
		email.body = str(msg)
		email.attachments=[("exported.csv", csv_file)]
		email.send()

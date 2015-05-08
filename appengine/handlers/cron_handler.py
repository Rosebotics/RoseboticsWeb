import webapp2
from google.appengine.api import mail
from datetime import datetime

class CronHandler(webapp2.RequestHandler):
	
	def get(self):
		if not self.request.headers['X-Appengine-Cron']:
			self.abort(403)
			return
		self.handle_job()

_tz_offsets = {'UTC':0, 'Pacific':-7, 'Mountain':-6, 'Central':-5, 'Eastern':-4}

class AutoSweep(CronHandler):
	
	def handle_job(self):
		utc = datetime.utcnow()
		sweep_time = datetime(utc.year, utc.month, utc.day)
		
	
	
	def send_email(self, leader_email, message, csv_file):
		message = mail.EmailMessage(sender="no-reply@roseboticsweb.appspotmail.com")
		message.to = leader_email
		message.subject = "ROSEbotics Auto Sweep"
		message.body = message
		mail.attachments=[("exported.csv", csv_file)]
		message.send()
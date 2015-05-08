import webapp2
from google.appengine.api import mail

class CronHandler(webapp2.RequestHandler):
	
	def get(self):
		if not self.request.headers['X-Appengine-Cron']:
			self.abort(403)
			return
		self.handle_job()


class AutoSweep(CronHandler):
	
	def handle_job(self):
		pass
	
	
	def send_email(self, leader_email, message, csv_file):
		message = mail.EmailMessage(sender="no-reply@roseboticsweb.appspotmail.com")
		message.to = leader_email
		message.subject = "ROSEbotics Auto Sweep"
		message.body = message
		mail.attachments=[("exported.csv", csv_file)]
		message.send()
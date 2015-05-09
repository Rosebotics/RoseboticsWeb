from models.rosebotics_models import RecentTrack
import logging
from settings import course_list as COURSE_IDS


MOST_RECENT_TRACK_ID = 'most_recent'

### Helper methods ###
def get_most_recent_course(rosebotics_key):
  """ Returns the single course that was most recent. """
  return RecentTrack.get_by_id(MOST_RECENT_TRACK_ID, parent=rosebotics_key)


def get_recent_tracks(rosebotics_key):
  """ Returns a dictionary of courses with their recent tracks, if there is one.
      Peusdo output: { 'recent_web_track' : RecentTrack(), 'recent_ios_track' : RecentTrack() } 
      So this user has started the Web and iOS Courses and are on those tracks but not Android """
  recent_tracks = {}
  for key in COURSE_IDS:
    key = key.lower()
    track = RecentTrack.get_by_id(key, parent=rosebotics_key)
    if track is not None:
      recent_tracks['recent_' + key + '_track'] = track
  return recent_tracks
  
def set_recent_track(rosebotics_key, track_path):
  """ Sets the track as the most recently visited track """
  track_path = "/" + track_path.split("/", 2)[1]
  track_type = None
  for course_prefix in COURSE_IDS:
    course_prefix = course_prefix.lower()
    if track_path.startswith("/" + course_prefix + "-"):
      track_type = course_prefix
      break
  if track_type is None:
    logging.error("Unknown track_path: " + track_path)
    return
  track = RecentTrack.get_by_id(track_type, parent=rosebotics_key)
  if track is None:
    track = RecentTrack(id=track_type, parent=rosebotics_key, path=track_path)
    track.put()
  elif track.path != track_path:
    track.path = track_path
    track.put()
  most_recent_track = RecentTrack.get_by_id(MOST_RECENT_TRACK_ID, parent=rosebotics_key)    
  if most_recent_track is None:
    most_recent_track = RecentTrack(id=MOST_RECENT_TRACK_ID, parent=rosebotics_key, path=track_path)
    most_recent_track.put()
  elif most_recent_track.path != track_path:
    most_recent_track.path = track_path
    most_recent_track.put()
  
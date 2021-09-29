var strings = [
  "Starting connection to WaspCTF",
  "Resolving owaspvit.com",
  "Requesting access to server",
  "Entering credentials",
  "Login denied, re-entering credentials",
  "Access granted",
  "Starting mcstausd",
  "Starting portmap",
  "Starting setroubleshootd",
  "Starting RPC idmapd",
  "Starting mdmonitor",
  "Starting system message bus",
  "Starting hidd",
  "Enabling /etc/fstab swaps",
  "INIT: Entering runlevel 3",
  "Checking for hardware changes",
  "Connecting to WaspCTF server",
  "Connected to backend service",
  "Finding CTF database services",
  "Services found on port 3306",
  "Establishing connection to the database",
  "Connection established",
  "Logging into the database server",
  "Login successful",
  "Reading database",
  "Fetching data from database",
  "Data acquired",
  "Finding other resources",
  "Fetching resources",
  "Processing DOM",
  "Loading images",
  "Loading content",
  "Page rendered",
  "Starting display manager",
  "Initializing...",
  "Welcome TO WaspCTF 2021!"
];

var preloader = document.getElementById('preloader');
var delay = 200;
var count = 0;
var repeat = 0;

function addLog() {
  var row = createLog('ok', count);
  preloader.appendChild(row);
  
  goScrollToBottom();
  
  count++;
  
  if (repeat == 0) {
    if (count > 2) {
      delay = 150;
    }
    
    if (count > 5) {
      delay = 120;
    }
    
    if (count > 8) {
      delay = 40;
    }
    
    if (count > 10) {
      delay = 5;
    }
  } else {
    if (count > 3) {
      delay = 13;
    }
  }
  
  if (count < strings.length) {
    setTimeout(function() {
      return addLog();
    }, delay);
  } else {
    setTimeout(function() {
      delay = 1000;
      return createLog("ok");
    }, 1000);
  }
}

function createLog(type, index) {
  var row = document.createElement('div');
  
  var spanStatus = document.createElement('span');
  spanStatus.className = type;
  spanStatus.innerHTML = type.toUpperCase();
  
  var message = (index != null) 
              ? strings[index] 
              : 'kernel: Initializing...';

  if(index == null) 
  {
    var preloader = $('#preloader');
    jQuery(preloader).fadeOut("fast");
    jQuery("#maincontent").fadeIn("slow");
  }
  
  var spanMessage = document.createElement('span');
  spanMessage.innerHTML = message;
  
  row.appendChild(spanStatus);
  row.appendChild(spanMessage);
  
  return row;
}

function goScrollToBottom() {
  $(document).scrollTop($(document).height()); 
}
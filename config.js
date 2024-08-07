const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252684444344";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_37_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICA5MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY0LFxuICAgICAgICA4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2MDNQNk9veG9jczNrcEROM1VNQVBvOWpyZHZjeGU3cmxIZTloakRKZW1ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjY4NDQ0NDM0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTY5MTg2NEIyNEQ1OTVBRTBBODAwN0U0M0I5RjYxNkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjgxNDMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjg0NDQ0MzQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRkE1QzZCOTNCODM1NjZFNkE0N0RBNjJDQUQ4NTMzMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2ODE0MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib0VrWDF6Ql9STnlreEEzaWd2cVNQd1wiLFxuICBcInBob25lSWRcIjogXCI2NjcyNjQyNC00MTA3LTQ1ODctOWU4NC03ZDQ2OTg3ZmJkNjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAxMzYsXG4gICAgICAxMDMsXG4gICAgICAxMjAsXG4gICAgICAxODUsXG4gICAgICA4MyxcbiAgICAgIDE5NSxcbiAgICAgIDI0NSxcbiAgICAgIDk3LFxuICAgICAgMTMyLFxuICAgICAgMjE4LFxuICAgICAgNzgsXG4gICAgICAxMzksXG4gICAgICAxNzksXG4gICAgICAxNzEsXG4gICAgICAyMTgsXG4gICAgICAxNzUsXG4gICAgICA0LFxuICAgICAgMTE2LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgODksXG4gICAgICA0NSxcbiAgICAgIDY3LFxuICAgICAgMjUwLFxuICAgICAgMTY0LFxuICAgICAgODksXG4gICAgICA5MCxcbiAgICAgIDE5OSxcbiAgICAgIDE2NixcbiAgICAgIDExMyxcbiAgICAgIDE3LFxuICAgICAgMjMzLFxuICAgICAgMjIzLFxuICAgICAgMTkzLFxuICAgICAgMTM0LFxuICAgICAgODYsXG4gICAgICAxMzQsXG4gICAgICA3MCxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUNDJGMzUzQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjg0NDQ0MzQ0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBYmRpcmFobWFuIFNoYWFtaWxcIixcbiAgICBcImxpZFwiOiBcIjY5MDU0NzE5MTE5NDE3OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUhtbFlZSEVNMlF1TFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2a2lMcFpUdDFRWmNwM3lJbUk5WGFSZEhYNGxuc0FudlUydEJjV1dldXg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdjbWdrU3paOFJZVCtoK2x4Z3VnTkQ2QWcrMzk1aExBdFJxaTlRN09oZXdaS0JmcFQ5Mmdwcm9WNGhOWEZiVTc1eXBFbHhlMU0yMkpQVFR0UlZVc0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNLbUFUZzhldVNuMkhMbTJZTnJleFU0YVhaUFI2ajJZK1dWVXlDUWM3SWRiNkdhOUlTMWRHOStmWFJpOWdvQjVYaVNiUDl6MDBjUWpscWJGbEk2MGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY4NDQ0NDM0NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2ODE0MjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNdkFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU12QS5qc29uIjogIntcImtleURhdGFcIjpcImZoWmI3NkxHcU9SVmk0dUFING03dmQvaWl4UDFtVW5OK1UxVGU3OTZwc1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5MTk4ODI4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjgxNDMwMjkyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

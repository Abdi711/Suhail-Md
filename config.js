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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_26_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM5LFxuICAgICAgICA5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc1LFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICA4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgODIsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwbVhGMGlNSEtuZE1zVnBFY0IwcnlDakMzWG4xZVhXMWVIbGxXRU04emRnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaR203Q2lUelN2U2RJbzBZUEdfZzdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBlYWNlZDk3LTE4NjMtNGJiZS1iM2Y1LTgzN2NiZWJlOGNmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAxNTcsXG4gICAgICA4LFxuICAgICAgMTk3LFxuICAgICAgMTY2LFxuICAgICAgMTY2LFxuICAgICAgMTk4LFxuICAgICAgMTIyLFxuICAgICAgMjA3LFxuICAgICAgMTEwLFxuICAgICAgMTc1LFxuICAgICAgNjYsXG4gICAgICAxOTksXG4gICAgICAxMjYsXG4gICAgICAyMyxcbiAgICAgIDk5LFxuICAgICAgNDAsXG4gICAgICA5NixcbiAgICAgIDE4MixcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDE0NCxcbiAgICAgIDExMixcbiAgICAgIDIyMixcbiAgICAgIDIxMSxcbiAgICAgIDE4MSxcbiAgICAgIDgyLFxuICAgICAgMjMyLFxuICAgICAgOTEsXG4gICAgICAyNDEsXG4gICAgICAxNjEsXG4gICAgICAyMTgsXG4gICAgICAxMDAsXG4gICAgICAxNjEsXG4gICAgICAxMjMsXG4gICAgICAxMDUsXG4gICAgICAyMCxcbiAgICAgIDIyMSxcbiAgICAgIDI1MixcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEVFlBUUNKTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjg0NDQ0MzQ0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBYmRpcmFobWFuIFNoYWFtaWxcIixcbiAgICBcImxpZFwiOiBcIjY5MDU0NzE5MTE5NDE3OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTURtbFlZSEVOYUx1TFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2a2lMcFpUdDFRWmNwM3lJbUk5WGFSZEhYNGxuc0FudlUydEJjV1dldXg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFucmpYeWs4d3BiSkJIZitUVXU5eEd2T3pFbFJTUGJsZUt1dCt0VG9PY0lJMlYwWG13RHordWZKMm1NMW52a24vblRSVHpZRHc0emtJUHNxUmZxSUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkE0eWl6Q3M0c1QvV0hkUEdhQ283ZW1LV0ZMTGo3QS9BclBvS2haTm9ZTmtTdWRHVjRmUGEzanI0d3lKckNKZjVCYVQyOUJOdmgvaGUyZS9NYks3aGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY4NDQ0NDM0NDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2ODA3OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNdStcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU11Ky5qc29uIjogIntcImtleURhdGFcIjpcIkNIWTB3Vm91Qlc4STdhTEVuci9tZ29LQzZjWWVxZThXZC9EQUFqSVd5MVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5MTk4ODI4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjgwNzk4Mzg1XCJ9Igp9"  // PUT your SESSION_ID 


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

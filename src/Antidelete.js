function a0_0x1e87(_0x184ddf,_0x50c670){const _0x16570b=a0_0x1657();return a0_0x1e87=function(_0x1e876f,_0x2d6749){_0x1e876f=_0x1e876f-0xbe;let _0x5ca0b1=_0x16570b[_0x1e876f];return _0x5ca0b1;},a0_0x1e87(_0x184ddf,_0x50c670);}const a0_0x52152e=a0_0x1e87;(function(_0x91bcb4,_0x5c8177){const _0xc87c68=a0_0x1e87,_0x5b4ed7=_0x91bcb4();while(!![]){try{const _0xdf9477=parseInt(_0xc87c68(0x11a))/0x1*(-parseInt(_0xc87c68(0xcc))/0x2)+-parseInt(_0xc87c68(0xe2))/0x3*(parseInt(_0xc87c68(0xcf))/0x4)+parseInt(_0xc87c68(0xc4))/0x5+-parseInt(_0xc87c68(0x10b))/0x6+-parseInt(_0xc87c68(0xd6))/0x7+-parseInt(_0xc87c68(0x113))/0x8*(parseInt(_0xc87c68(0x111))/0x9)+parseInt(_0xc87c68(0xcd))/0xa;if(_0xdf9477===_0x5c8177)break;else _0x5b4ed7['push'](_0x5b4ed7['shift']());}catch(_0x27532f){_0x5b4ed7['push'](_0x5b4ed7['shift']());}}}(a0_0x1657,0x3e28f));const sqlite3=require('sqlite3'),{open}=require(a0_0x52152e(0x101)),path=require(a0_0x52152e(0xbf)),chalk=require('chalk'),logger=require('./Plugin/kordlogger'),{DatabaseManager}=require('./Plugin/SQLitedb');class AntideleteModule{constructor(){const _0x487672=a0_0x52152e;this[_0x487672(0x10f)]=null,this[_0x487672(0xc9)]=![],this[_0x487672(0x115)]=null,this['db']=null;}async[a0_0x52152e(0x10c)](){const _0xa0482e=a0_0x52152e;try{this['db']=await open({'filename':path[_0xa0482e(0xeb)](__dirname,_0xa0482e(0x103)),'driver':sqlite3[_0xa0482e(0xda)]}),await DatabaseManager[_0xa0482e(0x116)](this['db']);}catch(_0x25451a){this['logError'](_0xa0482e(0xde),_0x25451a);throw _0x25451a;}}async[a0_0x52152e(0xe6)](_0x4b5047,_0x52ec84){const _0xa6813c=a0_0x52152e;try{const _0x1d9b46=await this['db'][_0xa6813c(0xd1)](_0xa6813c(0xf2),[_0x4b5047,_0x52ec84]);return _0x1d9b46?JSON['parse'](_0x1d9b46[_0xa6813c(0xce)]):null;}catch(_0x25ab18){return this[_0xa6813c(0xe1)](_0xa6813c(0xfb),_0x25ab18),null;}}[a0_0x52152e(0xf7)](_0x6452a4){const _0x34e07e=a0_0x52152e;return _0x6452a4[_0x34e07e(0xf0)](_0x34e07e(0xf4));}[a0_0x52152e(0xee)](_0x5a4cd1){const _0x3a23dc=a0_0x52152e;return _0x5a4cd1===_0x3a23dc(0xfa);}[a0_0x52152e(0xd4)](_0xa065aa){const _0x24ff7b=a0_0x52152e;if(this['isStatus'](_0xa065aa[_0x24ff7b(0xc3)][_0x24ff7b(0xf6)]))return![];if(!_0xa065aa[_0x24ff7b(0xce)])return![];const _0x3335a0=['protocolMessage','senderKeyDistributionMessage','messageContextInfo'],_0x8346c8=Object[_0x24ff7b(0xfe)](_0xa065aa['message'])[0x0];return logger[_0x24ff7b(0x108)](chalk['blue'](_0x24ff7b(0x114)+_0x8346c8)),!![];}[a0_0x52152e(0xed)](){const _0x9b289f=a0_0x52152e,_0x13f399=global[_0x9b289f(0x110)]?.[_0x9b289f(0x106)];if(!_0x13f399){this[_0x9b289f(0xe1)](_0x9b289f(0x104));return;}this['ownerJid']=_0x13f399[_0x9b289f(0xf5)](',')[0x0][_0x9b289f(0xe7)]()+_0x9b289f(0xdf);}[a0_0x52152e(0xd2)](_0x1cf4fe){const _0x404614=a0_0x52152e;return{'key':{'fromMe':![],'participant':_0x404614(0xfd),'remoteJid':_0x404614(0xfa),'id':_0x1cf4fe},'message':{'conversation':_0x404614(0xe3)}};}async[a0_0x52152e(0xd7)](_0x179972){const _0x4ce19d=a0_0x52152e;try{const _0x483704=await this[_0x4ce19d(0x115)][_0x4ce19d(0xf8)](_0x179972);return _0x483704[_0x4ce19d(0x10e)];}catch(_0x209228){return this[_0x4ce19d(0xe1)](_0x4ce19d(0xff),_0x209228),_0x179972[_0x4ce19d(0xf5)]('@')[0x0];}}async[a0_0x52152e(0x100)](_0x389573){const _0x2b788a=a0_0x52152e;if(!global[_0x2b788a(0x110)]?.[_0x2b788a(0xf3)])return;if(!this[_0x2b788a(0xc9)]||!this[_0x2b788a(0x10f)]){logger[_0x2b788a(0x108)](chalk[_0x2b788a(0xc5)](_0x2b788a(0x119)));return;}const _0x4eb481=_0x389573[_0x2b788a(0xc3)][_0x2b788a(0xf6)],_0x416f31=_0x389573[_0x2b788a(0xc3)]['id'];if(this[_0x2b788a(0xee)](_0x4eb481))return;const _0x2001b8=_0x389573[_0x2b788a(0x107)]['message']===null||_0x389573[_0x2b788a(0x107)]['messageStubType']===0x2||_0x389573['update'][_0x2b788a(0xce)]&&_0x389573[_0x2b788a(0x107)]['message'][_0x2b788a(0xc0)]&&_0x389573[_0x2b788a(0x107)][_0x2b788a(0xce)]['protocolMessage'][_0x2b788a(0xe8)]===0x0;if(_0x2001b8){logger[_0x2b788a(0x108)](chalk[_0x2b788a(0xc5)]('🔍\x20Antidelete:\x20Detected\x20deleted\x20message\x20'+_0x416f31+'\x20in\x20'+_0x4eb481));const _0x519f07=await this[_0x2b788a(0xe6)](_0x4eb481,_0x416f31);if(!_0x519f07){logger['info'](chalk[_0x2b788a(0xc5)](_0x2b788a(0xef)));return;}if(!this[_0x2b788a(0xd4)](_0x519f07)){logger[_0x2b788a(0x108)](chalk[_0x2b788a(0xc5)](_0x2b788a(0x117)));return;}await this[_0x2b788a(0xc2)](_0x4eb481,_0x519f07);}}async[a0_0x52152e(0xc2)](_0x15aae3,_0x533606){const _0x92d7bb=a0_0x52152e,_0x3f42e8=_0x533606[_0x92d7bb(0xc3)][_0x92d7bb(0xdc)]?this[_0x92d7bb(0x115)]['user']['id']:_0x533606[_0x92d7bb(0xc3)][_0x92d7bb(0xbe)]||_0x15aae3,_0x29c412=_0x533606[_0x92d7bb(0xc3)][_0x92d7bb(0xbe)]||_0x533606['key']['remoteJid'];try{const _0x1fe6ed=await this[_0x92d7bb(0x115)][_0x92d7bb(0xd5)](this[_0x92d7bb(0x10f)],{'forward':_0x533606},{'quoted':this[_0x92d7bb(0xd2)](_0x533606[_0x92d7bb(0xc3)]['id'])});if(_0x1fe6ed){const _0x410374=this['isGroup'](_0x15aae3)?await this[_0x92d7bb(0xd7)](_0x15aae3):'Private\x20Chat',_0x3a2251=[_0x29c412,_0x3f42e8][_0x92d7bb(0xc8)]((_0xe13f6c,_0x5f03e9,_0x1bd6ef)=>_0x1bd6ef[_0x92d7bb(0xe0)](_0xe13f6c)===_0x5f03e9);await this[_0x92d7bb(0x115)][_0x92d7bb(0xd5)](this[_0x92d7bb(0x10f)],{'text':this['createNotificationText'](_0x410374,_0x29c412,_0x3f42e8,_0x15aae3),'mentions':_0x3a2251},{'quoted':_0x1fe6ed}),logger[_0x92d7bb(0x108)](chalk[_0x92d7bb(0xd3)](_0x92d7bb(0x109)));}}catch(_0x2a3a64){this[_0x92d7bb(0xe1)](_0x92d7bb(0xea),_0x2a3a64);}}[a0_0x52152e(0xdb)](_0xb39e7,_0x1e010c,_0x261dc7,_0x20ca93){const _0x55164a=a0_0x52152e;return _0x55164a(0xcb)+(_0x55164a(0x118)+new Date()['toLocaleString']()+'\x0a')+(_0x55164a(0xd9)+_0x1e010c[_0x55164a(0xf5)]('@')[0x0]+'\x0a')+(_0x55164a(0xe9)+_0xb39e7+'\x0a')+('*DELETED\x20BY:*\x20@'+_0x261dc7[_0x55164a(0xf5)]('@')[0x0]+'\x0a')+('*IS\x20GROUP:*\x20'+(this[_0x55164a(0xf7)](_0x20ca93)?'Yes':'No'));}[a0_0x52152e(0xe1)](_0xcd1d91,_0x2b86b5){const _0x4f9917=a0_0x52152e;logger[_0x4f9917(0x112)](chalk[_0x4f9917(0xfc)]('❌\x20'+_0xcd1d91+':\x20'+_0x2b86b5[_0x4f9917(0xce)]));}async[a0_0x52152e(0xdd)](_0x4837a3){const _0x1f6ffe=a0_0x52152e;if(!global['settings']?.[_0x1f6ffe(0xf3)])return logger['info'](chalk[_0x1f6ffe(0xc5)](_0x1f6ffe(0xca))),this;try{return await this[_0x1f6ffe(0x10c)](),this[_0x1f6ffe(0xed)](),this[_0x1f6ffe(0xc9)]=!![],this[_0x1f6ffe(0x115)]=_0x4837a3,logger[_0x1f6ffe(0x108)](chalk[_0x1f6ffe(0xc1)](_0x1f6ffe(0xe5)+this[_0x1f6ffe(0xc9)])),this;}catch(_0x16fa94){this[_0x1f6ffe(0xe1)](_0x1f6ffe(0xe4),_0x16fa94);throw _0x16fa94;}}async['execute'](_0x180fa0,_0x52314a){const _0x3646b5=a0_0x52152e;await this[_0x3646b5(0x100)](_0x52314a);}async[a0_0x52152e(0x102)](_0x30dfef=0x7){const _0x27ba19=a0_0x52152e;try{const _0x4cd864=Date[_0x27ba19(0x10a)]()-_0x30dfef*0x18*0x3c*0x3c*0x3e8;await this['db'][_0x27ba19(0xf1)](_0x27ba19(0x105),[_0x4cd864]),logger[_0x27ba19(0x108)](chalk[_0x27ba19(0xd3)](_0x27ba19(0xc6)+_0x30dfef+_0x27ba19(0xd0)));}catch(_0x462d88){this[_0x27ba19(0xe1)](_0x27ba19(0xc7),_0x462d88);}}async[a0_0x52152e(0xf9)](){const _0x373374=a0_0x52152e;try{this['db']&&(await this['db']['close'](),logger[_0x373374(0x108)](chalk[_0x373374(0xd3)](_0x373374(0x10d))));}catch(_0x29e24c){this[_0x373374(0xe1)](_0x373374(0xec),_0x29e24c);}}}async function setupAntidelete(_0x50f2e4){const _0x448c14=a0_0x52152e,_0x3ac985=new AntideleteModule();return _0x3ac985[_0x448c14(0xdd)](_0x50f2e4);}function a0_0x1657(){const _0x3b10c3=['messages.db','Owner\x20numbers\x20not\x20set\x20in\x20global\x20settings','DELETE\x20FROM\x20messages\x20WHERE\x20timestamp\x20<\x20?','OWNER_NUMBERS','update','info','✅\x20Antidelete:\x20Forwarded\x20deleted\x20message\x20to\x20owner','now','1331478ngzhNr','initializeDB','✅\x20Database\x20connection\x20closed\x20successfully','subject','ownerJid','settings','19053mipiJO','error','888htgtZx','📩\x20Tracking\x20message\x20of\x20type:\x20','sock','createSchema','Message\x20type\x20not\x20configured\x20for\x20tracking','*TIME:*\x20','Antidelete\x20is\x20disabled\x20or\x20owner\x20JID\x20not\x20set','359318qoXgtz','participant','path','protocolMessage','blue','forwardDeletedMessage','key','957635ZLrMxb','yellow','✅\x20Cleaned\x20up\x20messages\x20older\x20than\x20','Error\x20cleaning\x20old\x20messages','filter','enabled','Antidelete\x20is\x20disabled\x20in\x20global\x20settings','*[DELETED\x20MESSAGE\x20INFORMATION]*\x0a\x0a','2EfoMJs','15769060DOJOej','message','61652SGCDyZ','\x20days','get','createFakeReply','green','shouldTrackMessage','sendMessage','1538635YvgDxQ','getGroupName','exports','*MESSAGE\x20FROM:*\x20@','Database','createNotificationText','fromMe','setup','Error\x20initializing\x20SQLite\x20database','@s.whatsapp.net','indexOf','logError','93iSPxza','*ANTIDELETE\x20DETECTED*','Error\x20setting\x20up\x20Antidelete\x20module','🚀\x20Antidelete\x20module\x20initialized\x20with\x20SQLite.\x20Enabled:\x20','readFromDB','trim','type','*CHAT:*\x20','Error\x20forwarding\x20deleted\x20message','join','Error\x20closing\x20database\x20connection:','setOwnerJid','isStatus','Deleted\x20message\x20not\x20found\x20in\x20database','endsWith','run','SELECT\x20message\x20FROM\x20messages\x20WHERE\x20remoteJid\x20=\x20?\x20AND\x20id\x20=\x20?','ANTI_DELETE_ENABLED','@g.us','split','remoteJid','isGroup','groupMetadata','close','status@broadcast','Error\x20reading\x20from\x20database','red','0@s.whatsapp.net','keys','Error\x20fetching\x20group\x20name','handleMessageUpdate','sqlite','cleanOldMessages'];a0_0x1657=function(){return _0x3b10c3;};return a0_0x1657();}module[a0_0x52152e(0xd8)]={'setupAntidelete':setupAntidelete};
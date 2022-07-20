const snmp = require ("net-snmp");

let session = snmp.createSession("172.16.140.36", "public");

let oids = ["1.3.6.1.2.1.43.11.1.1.8.1.2","1.3.6.1.2.1.43.11.1.1.8.1.1","1.3.6.1.2.1.43.11.1.1.8.1.3"];

session.get(oids, function(error, varbinds){
    if (error) {
        console.error (error);
    } else {
        for (var i = 0; i < varbinds.length; i++){
            if (snmp.isVarbindError (varbinds[i])){
                console.error (snmp.varbindError (varbinds[i]));
            } else {
                console.log (varbinds[i].oid +  ' = '  + varbinds[i].value);
            };
        }
    }
    session.close ();
});

session.trap (snmp.TrapType.LinkDown, function (error) {
    if (error){
        console.error (error);
    }
});
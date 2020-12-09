  // 웹소켓 전역 객체 생성
        var ws = new WebSocket("ws://192.168.0.111:5599", "echo-protocol");
    
      // 연결이 수립되면 서버에 메시지를 전송한다
      ws.onopen = function(event) {
        console.log('connection');
        // ws.send("연결됨");
      }
      // 서버로 부터 메시지를 수신한다
      ws.onmessage = function(event) {
        console.log("Server message: ", event.data);
        // document.write("Server message: ", event.data);
      }
      // error event handler
      ws.onerror = function(event) {
        console.log("Server error message: ", event.data);
      }
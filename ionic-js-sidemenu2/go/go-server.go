package main

import (
	"bufio"
	"fmt"
	"net"
	"net/http"
)

func main() {
	http.HandleFunc("/", convert)
	http.ListenAndServe(":2300", nil)
}

func convert(response http.ResponseWriter, request *http.Request) {
	conn, err := net.Dial("tcp", "192.168.1.200:2000")
	if err != nil {
		// handle error
		fmt.Print(err)
		return
	}
	fmt.Fprintf(conn, "*%s\r\n\r\n", request.FormValue("data"))

	status, err := bufio.NewReader(conn).ReadString('\r')
	if err != nil {
		// handle error
		fmt.Print(err)
		return
	}
	fmt.Fprint(response, status)
}

package main

import (
	"fmt"
	"net/http"
)

func main() {

	//TODO Start all routines and check that all is good

	//FileServer to serve all needed files
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	http.HandleFunc("/")

	fmt.Println("Server listenning on http://localhost:8080/")
	http.ListenAndServe(":8080", nil)
}

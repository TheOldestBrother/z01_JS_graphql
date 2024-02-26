package graphql

import "net/http"

// This is the main router where everything pass through, if connection is good
// it is then sent to the correct handler.
func RouterHandler(w http.ResponseWriter, r *http.Request) {
	//TODO Check connections

	switch r.Method {
	case "POST":

	default:
		//TODO Set error handler
		errorHandler(w, r, "MethodNotAllowed")
	}
}

func errorHandler(w http.ResponseWriter, r *http.Request, err string) {

}

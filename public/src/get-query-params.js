function getQueryParams() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&")
	
	keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=')
        result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || ''
	})
	
    return result
}

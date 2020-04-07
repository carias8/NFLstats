$(() => {
	$.get('https://www.fantasyfootballnerd.com/service/players/json/test', (data) => {
		console.log(data)
	})
})
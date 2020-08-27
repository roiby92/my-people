

const myUrl = function () {
    return `https://randomuser.me/api/?page=3&results=30&seed=abc`
}


const getDetails = function (data) {
    return data.map(n => {return{id:n.id ,name: `${n.name.title} ${n.name.first} ${n.name.last}`,email: n.email }})
}


const getPerson = function (data) {
    const myData = [...data.results]
    const peopleDetails = getDetails(myData)
    const source = $('#people-tamplate').html()
    const template = Handlebars.compile(source)
    const pepoleHtml = template({peopleDetails})
    $('#container').append(pepoleHtml)
}

$.ajax({
    method: "GET",
    url: myUrl(),
    success: getPerson,
    error: function (xhr, text, error) {
        console.log(text)
    }
});

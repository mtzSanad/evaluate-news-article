import { checkForName } from '..'

function handleSubmit(event) {
    // debugger
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article-url').value
    if (checkForName(formText)) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8086/sentiment', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({
                data: formText,
            })
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('text').innerHTML = res.text
                document.getElementById('agreement').innerHTML = res.agreement
                document.getElementById('subjectivity').innerHTML = res.subjectivity
                document.getElementById('confidence').innerHTML = res.confidence
                document.getElementById('irony').innerHTML = res.irony
                document.getElementById('score_tag').innerHTML = res.score_tag
            })
    } else {
        alert('Enter a valid URL')
    }
}

export { handleSubmit }
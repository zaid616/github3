const output = (data) =>{
    document.getElementById("div2").innerHTML = data
}

const WhereWeAt = () => {
    console.log(window)
    output(window.location)
    
}

const GoToGoogle = () => {
    window.location.assign("https://google.com")
}


const ReplaceUrl = () => {
    window.location.replace("https://google.com")
}
var popup = ""
const OpenPopup = () => {
    popup = window.open("", "", "width=300, height=300")
}

const FillContentInPopup = () => {
    popup = window.open("", "", "width=300, height=300")
    popup.document.write("<h1>Heading 1</h1> </br> <h2>This is simple Popup</h2>")
}

const AssignUrl = () => {
    popup = window.open("", "", "width=300, height=300")
    popup.location.assign("https://google.com")
}
const ClosePopup = () => {
    popup.close()
}


const Alert = () => {
    try {
        alert("This is simple Alert")
    }
    catch{
        var html = "<h2>Something went wrong</h2>" 
        output(html)

    }
}
const clearOutput = () => {
    output("")
}

let remain = 6, complete = 23;

function getElementById (id) {
    return document.getElementById(id);
}
function getInputById (id) {
    return document.getElementById(id).value;
}
function getInnerText (id) {
    return document.getElementById(id).innerText;
}
function setInnerTExt (id, text) {
    document.getElementById(id).innerText = text;
}
function setDisplay (id, status) {
    document.getElementById(id).style.display = 'status';
}



function update(id) {
    id.style.cursor = "not-allowed"; 
    id.style.backgroundColor = 'gray'
    id.disabled = true;
    
    
    const temp = document.createElement('div');
    temp.innerHTML = `
    <div
    id="activity-text"
    class="bg-[#F4F7FF] text-gray-700 text-sm p-3 rounded-lg"
    ></div>
    `;
    
    const serviceNames = {
        'fix-mobile-btn': '\"Fix Mobile Button Issue\"',
        'dark-btn': '\"Add Dark Mode\"',
        'optimize-home-btn': '\"Optimize Home page\"',
        'add-emoji-btn': '\"Add new emoji 🤲\"',
        'api-btn': '\"Integrate OpenAI API\"',
        'job-btn': '\"Improve Job searching\"'
    };
    let serviceName = serviceNames[id.id];
    

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    temp.querySelector('#activity-text').innerText = `You have completed the task ${serviceName} at ${time}`;



    getElementById('activity-container').append(temp);  


    getElementById('task-rem').innerText = --remain;
    getElementById('task-add').innerText = ++complete;


    alert('Board Updated Successfully.');
    
    if (remain == 0) {
        alert('Congratulations You Have Completed All The Task.');
    }
}


document.getElementById('fix-mobile-btn').addEventListener('click', function(event){
    event.preventDefault();
    update(this);
})
document.getElementById('dark-btn').addEventListener('click', function(event){
    event.preventDefault();
    update(this);
})
document.getElementById('optimize-home-btn').addEventListener('click', function(event){
    event.preventDefault();
    update(this);
})
document.getElementById('add-emoji-btn').addEventListener('click', function(event){
    event.preventDefault();
    update(this);
})
document.getElementById('api-btn').addEventListener('click', function(event){
    event.preventDefault();
    update(this);
})
document.getElementById('job-btn').addEventListener('click', function(event){
    event.preventDefault();
    update(this);
})


document.getElementById('activity-clean').addEventListener('click', function(event){
    event.preventDefault();
    
    getElementById('activity-container').innerHTML = ``; 
})



const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });


getElementById('day').innerText = day;
getElementById('date').innerText = date;
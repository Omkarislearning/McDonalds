function photos(anything)
{
    document.querySelector('.starbucksMain').src=anything;
}

function changeColor(color)
{
    const circle=document.querySelector('.circle');
    circle.style.background=color;
}

function colorbody(color)
{
    const element=document.querySelectorAll('.navEle');
    for(let i =0 ;i<element.length;i++)
    {
        element[i].style.background=color;
    }
}
function starbucks(color)
{
    
    const starbucks1 =document.querySelector('.starbucks');
    starbucks1.style.color=color;
}
function button(color)
    {
        const btn=document.querySelector('.btn');
        btn.style.background=color;
    }

    function toggleMenu()
    {
        var toggle=document.querySelector('.toggle');
        var nav=document.querySelector('.navbar');
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    }
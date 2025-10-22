(function(){
    const stage = document.getElementById('stage');
    const btnSquare = document.getElementById('btnSquare');
    const btnTriangle = document.getElementById('btnTriangle');
    const btnCircle = document.getElementById('btnCircle');
    const btnClear = document.getElementById('btnClear');
    const countInput = document.getElementById('count');


    function rand(min, max){ return Math.floor(Math.random()*(max-min+1))+min }


    function addShapes(type, n){
        for(let i=0;i<n;i++) createShape(type);
    }
    function createShape(type){
        const el = document.createElement('div');
        el.classList.add('shape', type);
        const size = rand(40,120);
        const maxX = Math.max(0, stage.clientWidth - size - 10);
        const maxY = Math.max(0, stage.clientHeight - size - 10);
        const x = rand(5, Math.max(5, maxX));
        const y = rand(5, Math.max(5, maxY));
        if(type === 'square'){
            el.style.width = size + 'px';
            el.style.height = size + 'px';
            el.style.left = x + 'px';
            el.style.top = y + 'px';
        } 
        else if(type === 'circle'){
            el.style.width = size + 'px';
            el.style.height = size + 'px';
            el.style.left = x + 'px';
            el.style.top = y + 'px';
        } 
        else if(type === 'triangle'){
            const base = size;
            const height = Math.round(base * Math.sqrt(3)/2);
            el.style.borderLeft = (base/2) + 'px solid transparent';
            el.style.borderRight = (base/2) + 'px solid transparent';
            el.style.borderBottomWidth = height + 'px';
            el.style.borderBottomStyle = 'solid';
            el.style.left = x + 'px';
            el.style.top = y + 'px';
            el.dataset._triangleHeight = height;
            el.dataset._triangleBase = base;
        }
        el.style.opacity = (0.7).toFixed(2);
        el.addEventListener('click', function(ev){
            document.querySelectorAll('.shape.selected').forEach(s => s.classList.remove('selected'));
            el.classList.add('selected');
            ev.stopPropagation();
        });
        el.addEventListener('dblclick', function(ev){
            el.remove();
            ev.stopPropagation();
        });
        stage.appendChild(el);
    }
    stage.addEventListener('click', function(){
        document.querySelectorAll('.shape.selected').forEach(s => s.classList.remove('selected'));
    });
    btnSquare.addEventListener('click', ()=>addShapes('square', getCount()));
    btnTriangle.addEventListener('click', ()=>addShapes('triangle', getCount()));
    btnCircle.addEventListener('click', ()=>addShapes('circle', getCount()));
    btnClear.addEventListener('click', ()=>{ stage.innerHTML=''; });
    function getCount(){
        const v = parseInt(countInput.value,10);
        return isNaN(v) || v<1 ? 1 : v;
    }
})();
const l = console.log;

const leverageChanged = (val) => {
  document.getElementById('mfv').innerHTML = `${val}x`;
  if(val === "1"){
    document.getElementById('mfv').removeAttribute('class');
    document.getElementById('mfv').setAttribute('class','text-success');
  } else{
    document.getElementById('mfv').removeAttribute('class');
    document.getElementById('mfv').setAttribute('class','text-danger');
  }
  const lev = parseInt(val);
  document.getElementById('lqv').innerHTML = `${parseFloat((100/val).toFixed(2)).toString()}%`;
  document.getElementById('tfv').innerHTML = `${parseFloat((0.1*val).toFixed(2)).toString()}%`;
}

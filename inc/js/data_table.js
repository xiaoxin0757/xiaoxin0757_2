// JavaScript Document
function f(name){
	var cbx=document.getElementsByTagName("input");
	for(var i=0;i<cbx.length;i++)
	{
		if(cbx[i].type =="checkbox" && cbx[i].name==name)
		{
			if (cbx[i].checked)
			{
				var t=cbx[i].parentElement;
				while(t.tagName!='TR'){ t=t.parentNode;}
				t.style.backgroundColor="#ffb";
			}
			else
			{
				var t=cbx[i].parentElement;
				while(t.tagName!='TR'){ t=t.parentNode;}
				t.style.backgroundColor="";
			}
		}
	}
}

function btn_check_all(name,flag){//flag false=off true=on
	var cbx=document.getElementsByTagName("input");
	for(var i=0;i<cbx.length;i++)
	{
		if(cbx[i].type =="checkbox" && cbx[i].name==name)
		{
			if(flag)
			cbx[i].checked="checked";
			else
			cbx[i].checked="";
		}
	}
}
function deleteAll(action_to)
{	
	if(confirm("真的要删除吗?")) {
		var a = new Array(); 
		var cbx=document.getElementsByTagName("input");
		for (var i=0;i<cbx.length;i++) {
			if (cbx[i].checked==true && cbx[i].type =="checkbox") {
				a.push(cbx[i].value);
			}
		}
		if (a.length==0) {
			alert('没有选择！');
			return false;
		}
		else
		{
		/*alert(action_to+"&ids="+a.join(','));*/
		window.location.href=action_to+"&ids="+a.join(','); 
		}
	}
}
function move_to(to,action_to)
{
	if(to)
	{
		if(confirm("真的要移动吗?")) {
			var a = new Array(); 
			var cbx=document.getElementsByTagName("input");
			for (var i=0;i<cbx.length;i++) {
				if (cbx[i].checked==true && cbx[i].type =="checkbox") {
					a.push(cbx[i].value);
				}
			}
			if (a.length==0) {
				alert('没有选择！');
				return false;
			}
			else
			{
			window.location.href=action_to+"&move_to="+to+"&ids="+a.join(','); 
			}
		}
	}
}
function cw(sender)
{
	if(sender.style.backgroundColor!="#ffb")
	sender.style.backgroundColor='';
}
function cy(sender)
{
	if(sender.style.backgroundColor!="#ffb")
	sender.style.backgroundColor='#ffc';
}
//random.js

//  提供一些对于随机数的常用方法
//  以提高编程的效率

function random()
{
    return Math.random();
}

function randint(min,max)
{
    min = Math.ceil(min);
	max = Math.floor(max);
	ans = Math.floor(Math.random()*(max-min))+min;
    return ans;
}

function randfloat(min,max,n)
{
    ans = Math.random()*(max-min)+min;
    ans = ans.toFixed(n);
    return ans;
}

function randchoice(arr)
{
    count = randint(0,arr.length);
    return arr[count];
}
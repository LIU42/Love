function random() { return Math.random(); }

function randInt(min, max)
{
    min = Math.ceil(min);
	max = Math.floor(max);
	ans = Math.floor(Math.random() * (max - min)) + min;
    return ans;
}

function randFloat(min, max, prec)
{
    ans = Math.random() * (max - min) + min;
    ans = ans.toFixed(prec);
    return ans;
}

function randChoice(arr)
{
    count = randInt(0, arr.length);
    return arr[count];
}
function random()
{
    ans = Math.random();
    return ans;
}

function randInt(min, max)
{
    min = Math.ceil(min);
	max = Math.floor(max);
	ans = Math.floor(Math.random() * (max - min)) + min;
    return ans;
}

function randFloat(min, max)
{
    ans = Math.random() * (max - min) + min;
    return ans;
}

function randChoice(arr)
{
    count = randInt(0, arr.length);
    ans = arr[count];
    return ans;
}
function sumPrimes(sum)
{
  var ttl = 0;
  
  for(var i = 2; i <= sum; i++)
    {
      var Pri = false; 
      for(var j = 2; j <= i; j++)
      {
        if(i%j===0 && i!==j)
          {
            Pri = true;
          }
      }
      if(Pri === false)
      {
        ttl = ttl + i;
        
      }
    }
  return ttl;
}
document.write(sumPrimes(10));
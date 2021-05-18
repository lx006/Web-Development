/*Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

const getSleepHours = (day) =>
{
  day = day.toLowerCase();
  if(day==='monday')
  {
    return 6;
  }
  else if(day==='tuesday')
  {
    return 6;
  }
  else if(day==='wednesday')
  {
    return 7;
  }
  else if(day==='thursday')
  {
    return 6;
  }
  else if(day==='friday')
  {
    return 7;
  }
  else if(day==='saturday')
  {
    return 8;
  }
  else(day==='sunday')
  {
    return 8;
  }

}
const getActualSleepHours=() =>
{
  let hours = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('wednesday')+ getSleepHours('thursday')+ getSleepHours('friday')+ getSleepHours('saturday')+ getSleepHours('sunday');
  return hours;
}

const getIdealSleepHours = () =>{
  const idealHours = 7.5;
  return idealHours * 7;
}

function calculateSleepDebt()
{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if(actualSleepHours===idealSleepHours)
  {
    console.log('the user got the perfect amount of sleep');
  }
  else if(actualSleepHours > idealSleepHours)
  {
    console.log('the user got more sleep than needed');
  }
  else if(actualSleepHours < idealSleepHours)
  {
    console.log('the user should get some rest');
  }
}
calculateSleepDebt();

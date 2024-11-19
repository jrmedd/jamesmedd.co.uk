const TimeOfDayGreeting = props => {
  const hourOfDay = new Date().getHours()
  let greeting = 'Hello!'
  if (hourOfDay > 0 && hourOfDay < 12) {
    greeting = 'Good morning!'
  } else if (hourOfDay >= 12 && hourOfDay < 18) {
    greeting = 'Good afternoon!'
  } else if (hourOfDay >= 18 && hourOfDay <= 23 ) {
    greeting = 'Good evening!'
  }
  return (
    <>
    { greeting }
    </>
  )
}

export { TimeOfDayGreeting }

import React, {useState, useEffect} from 'react';

function AnalyticsCounter({initValue = 0 , step = 1}) {
  const [count, setCount] = useState(initValue)

  // Either the useEffect or the clickHandler solution
  // useEffect(() => {
  //   // this is absolutely overkill, but provides a way to fire analytics event based on application state
  //   if(typeof Analytics != 'undefined') {
  //     // just to make sure we do not fire on first render
  //     if(count !== initValue) {
  //       const user = Liferay.ThemeDisplay.getUserName()
  //       alert(`analytics is tracking ${count} value set by ${user}`)
  //       Analytics.track("user interaction click",{
  //         'counter': count,
  //         'user': user,
  //       });
  //     }
  //   }
  // }, [count])

  const clickHandler = () => {
    // Handling the event in an onClick handler
    if(typeof Analytics != 'undefined') {
      const user = Liferay.ThemeDisplay.getUserName()

      // you have to think about the values you are passing as the state of the app is not updated yet
      alert(`analytics is tracking ${count+step} new value incremented by ${step} and set by ${user}`)

      Analytics.track("user interaction click",{
        'counter': count+step,
        'step': step,
        'user': user,
      });
    }

    setCount(count + step)
  }
  
  return (
    <>
      <div className="btn-group-item">
        <a className="btn btn-sm btn-primary" onClick={clickHandler} href="#">
            +{step}
        </a>
      </div>
      <div>
        {count}
      </div>
    </>
  )
}

export default function (props) {
  console.log("props", props);

  return <AnalyticsCounter initValue={0} step={1} />;
}

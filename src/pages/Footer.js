import React from 'react'

export default function Footer() {
 // const copy = React.string("js|\u00a9|js")
 const currentYear = (new Date().getFullYear())
 const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear
 return (
  <div>
   <span dangerouslySetInnerHTML={{ "__html": "&copy; Service - Developed By RC " }} />
   <span dangerouslySetInnerHTML={{ "__html": yearTxt }} />
   {/* <span dangerouslySetInnerHTML={{ "__html": new Date().getFullYear() }} /> */}
  </div>
 )
}

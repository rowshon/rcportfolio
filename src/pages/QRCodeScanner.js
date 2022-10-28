import React from 'react'

export default function QRCodeScanner() {

 return (
  <div>
   <div className="container">

    <div class="text-center" style="padding:20px;"></div>
    <button onclick="generatePDF()">Generate PDF using HTML2PDF</button>
   </div>
   <div class="container_content" id="container_content">


    <div class="invoice-box">

     <table cellpadding="0" cellspacing="0">
      <tr class="top">
       <td colspan="2">
        <table>
         <tr>
          <td class="title">
          </td>

          <td>
           Invoice #: INV38379<br />
           Created: January 1, 2022<br />
           Due: February 1, 2022
          </td>
         </tr>
        </table>
       </td>
      </tr>

      <tr class="information">
       <td colspan="2">
        <table>
         <tr>
          <td>
           Sparksuite, Inc.<br />
           12345 Sunny Road<br />
           Sunnyville, CA 12345
          </td>

          <td>
           Acme Corp.<br />
           John Doe<br />
           john@example.com
          </td>
         </tr>
        </table>
       </td>
      </tr>

      <tr class="heading">
       <td>Payment Method</td>

       <td>Check #</td>
      </tr>

      <tr class="details">
       <td>Check</td>

       <td>1234</td>
      </tr>

      <tr class="heading">
       <td>Item</td>

       <td>Price</td>
      </tr>

      <tr class="item">
       <td>Website design</td>

       <td>$123.00</td>
      </tr>

      <tr class="item">
       <td>Hosting (3 months)</td>

       <td>$45.00</td>
      </tr>

      <tr class="item last">
       <td>Domain name (1 year)</td>

       <td>$67.00</td>
      </tr>

      <tr class="total">
       <td></td>

       <td>Total: $235.00</td>
      </tr>
     </table>
    </div>
   </div>
  </div>
 )
}

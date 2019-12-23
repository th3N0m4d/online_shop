import React from 'react'

const ReviewForm = () => (
  <div class='review_box'>
    <h4>Add a Review</h4>
    <p>Your Rating:</p>
    <ul class='list'>
      <li>
        <a href='#'>
          <i class='fa fa-star' />
        </a>
      </li>
      <li>
        <a href='#'>
          <i class='fa fa-star' />
        </a>
      </li>
      <li>
        <a href='#'>
          <i class='fa fa-star' />
        </a>
      </li>
      <li>
        <a href='#'>
          <i class='fa fa-star' />
        </a>
      </li>
      <li>
        <a href='#'>
          <i class='fa fa-star' />
        </a>
      </li>
    </ul>
    <p>Outstanding</p>
    <form class='row contact_form' action='contact_process.php' method='post' id='contactForm' novalidate='novalidate'>
      <div class='col-md-12'>
        <div class='form-group'>
          <input type='text' class='form-control' id='name' name='name' placeholder='Your Full name' />
        </div>
      </div>
      <div class='col-md-12'>
        <div class='form-group'>
          <input type='email' class='form-control' id='email' name='email' placeholder='Email Address' />
        </div>
      </div>
      <div class='col-md-12'>
        <div class='form-group'>
          <input type='text' class='form-control' id='number' name='number' placeholder='Phone Number' />
        </div>
      </div>
      <div class='col-md-12'><grammarly-extension class='_1KJtL' style='position: absolute; top: 0px; left: 0px; pointer-events: none;'><div data-grammarly-part='highlights' class='u_fNK' style='position: absolute; top: 0px; left: 0px;'><div style='box-sizing: content-box; top: 1px; left: 16px; width: 417px; height: 138px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;'><div style='position: absolute; top: 0px; left: 0px;'><div style='height: 1038px; width: 1857px;'><div /><div /></div></div></div></div><div data-grammarly-part='button' class='u_fNK' style='position: absolute; top: 0px; left: 0px;'><div style='box-sizing: content-box; top: 1px; left: 16px; width: 417px; height: 138px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;'><div style='position: absolute; transform: translate(-100%, -100%); top: 130px; left: 405px; width: auto; height: auto; pointer-events: all;'><div style='flex-direction: row; display: flex;'><div style='position: relative;' /><div><div class='_5WizN _1QzSN'><div class='_3YmQx'><div title='Protected by Grammarly' class='_3QdKe'>&nbsp;</div></div></div></div></div></div></div></div></grammarly-extension><grammarly-extension class='_1KJtL' style='position: absolute; top: 0px; left: 0px; pointer-events: none;'><div data-grammarly-part='highlights' class='u_fNK' style='position: absolute; top: 0px; left: 0px;'><div style='box-sizing: content-box; top: 1px; left: 16px; width: 417px; height: 138px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;'><div style='position: absolute; top: 0px; left: 0px;'><div style='height: 1038px; width: 1857px;'><div /><div /></div></div></div></div><div data-grammarly-part='button' class='u_fNK' style='position: absolute; top: 0px; left: 0px;'><div style='box-sizing: content-box; top: 1px; left: 16px; width: 417px; height: 138px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;'><div style='position: absolute; transform: translate(-100%, -100%); top: 130px; left: 405px; width: auto; height: auto; pointer-events: all;'><div style='flex-direction: row; display: flex;'><div style='position: relative;' /><div><div class='_5WizN _1QzSN'><div class='_3YmQx'><div title='Protected by Grammarly' class='_3QdKe'>&nbsp;</div></div></div></div></div></div></div></div></grammarly-extension>
        <div class='form-group'>
          <textarea class='form-control' name='message' id='message' rows='1' placeholder='Review' spellcheck='false' />
        </div>
      </div>
      <div class='col-md-12 text-right'>
        <button type='submit' value='submit' class='btn submit_btn'>Submit Now</button>
      </div>
    </form>
  </div>
)

export default ReviewForm

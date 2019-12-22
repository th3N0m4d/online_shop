import React from 'react'

import img01Path from '../../img/instagram/Image-01.jpg'
import img02Path from './../img/instagram/Image-02.jpg'
import img03Path from './../img/instagram/Image-03.jpg'
import img04Path from './../img/instagram/Image-04.jpg'
import img05Path from './../img/instagram/Image-05.jpg'
import img06Path from './../img/instagram/Image-06.jpg'
import img07Path from './../img/instagram/Image-07.jpg'
import img08Path from './../img/instagram/Image-08.jpg'

const Footer = () => (
  <footer className='footer-area section_gap'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3  col-md-6 col-sm-6'>
          <div className='single-footer-widget'>
            <h6 className='footer_title'>About Us</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6'>
          <div className='single-footer-widget'>
            <h6 className='footer_title'>Newsletter</h6>
            <p>Stay updated with our latest trends</p>
            <div id='mc_embed_signup'>
              <form target='_blank' action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01' method='get' className='subscribe_form relative'>
                <div className='input-group d-flex flex-row'>
                  <input name='EMAIL' placeholder='Email Address' required='' type='email' />
                  <button className='btn sub-btn'>
                    <i className='fas fa-arrow-right' />
                  </button>
                </div>
                <div className='mt-10 info' />
              </form>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
          <div className='single-footer-widget instafeed'>
            <h6 className='footer_title'>Instagram Feed</h6>
            <ul className='list instafeed d-flex flex-wrap'>
              <li>
                <img src={img01Path} alt='' />
              </li>
              <li>
                <img src={img02Path} alt='' />
              </li>
              <li>
                <img src={img03Path} alt='' />
              </li>
              <li>
                <img src={img04Path} alt='' />
              </li>
              <li>
                <img src={img05Path} alt='' />
              </li>
              <li>
                <img src={img06Path} alt='' />
              </li>
              <li>
                <img src={img07Path} alt='' />
              </li>
              <li>
                <img src={img08Path} alt='' />
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-2 col-md-6 col-sm-6'>
          <div className='single-footer-widget f_social_wd'>
            <h6 className='footer_title'>Follow Us</h6>
            <p>Let us be social</p>
            <div className='f_social'>
              <a href='#'>
                <i className='fab fa-facebook-f' />
              </a>
              <a href='#'>
                <i className='fab fa-twitter' />
              </a>
              <a href='#'>
                <i className='fab fa-dribbble' />
              </a>
              <a href='#'>
                <i className='fab fa-behance' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='row footer-bottom d-flex justify-content-between align-items-center'>
        <p className='col-lg-12 footer-text text-center'>
            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with <i className='far fa-heart' /> by <a href='https://colorlib.com' target='_blank' rel='noopener noreferrer'>Colorlib</a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

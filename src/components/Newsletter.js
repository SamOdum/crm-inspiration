import React from 'react';

function Newsletter() {
  return (
    <div>
      <div id="myModal" className="modal fade">
        <div className="modal-dialog newsletter-popup">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <div className="modal-body">
              <h4 className="modal-title">NEWSLETTER SIGNUP</h4>
              <form
                id="newsletter-form"
                method="post"
                action="/site/news-signup"
              >
                <input
                  type="hidden"
                  name="_csrf"
                  value="PSwSWoTi6nAo1jDeHHYbpTesdj9eg43cIKCNVvhKQ0R5REAzwL2rEnqZabZdJHjEXtkZSjzu4pJzl8U8tRB3EA=="
                />
                <div className="content-subscribe">
                  <div className="form-subscribe-header">
                    <p>
                      Subscribe to be the first to know about Sales, Events, and
                      Exclusive Offers!
                    </p>
                  </div>
                  <div className="input-box">
                    <input
                      type="text"
                      className="input-text newsletter-subscribe"
                      title="Sign up for our newsletter"
                      name="newsemail"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="actions">
                    <button
                      className="button-subscribe"
                      title="Subscribe"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <div className="subscribe-bottom">
                <input name="notshowpopup" id="notshowpopup" type="checkbox" />
                Do not show this popup again
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

import React from 'react';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__title">
                    <h2>Pizza</h2>
                    <p>Самая вкусная пицца во вселенной</p>
                </div>
                <p> политика конфиденциальности</p>
                <p>Соглашение на обработку персональных данных</p>
                <div className="social-media">
                    <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M9.36525 0.891829L7.03106 0.888916C4.40867 0.888916 2.71396 2.24125 2.71396 4.33433V5.9229H0.36703C0.164227 5.9229 0 6.05078 0 6.20852V8.51017C0 8.66794 0.164415 8.79565 0.36703 8.79565H2.71396V14.6035C2.71396 14.7612 2.87819 14.8889 3.08099 14.8889H6.14307C6.34587 14.8889 6.5101 14.761 6.5101 14.6035V8.79565H9.25421C9.45701 8.79565 9.62124 8.66794 9.62124 8.51017L9.62236 6.20852C9.62236 6.13278 9.5836 6.06025 9.51487 6.00665C9.44615 5.95305 9.35252 5.9229 9.25514 5.9229H6.5101V4.57625C6.5101 3.929 6.70841 3.60042 7.79246 3.60042L9.36488 3.59999C9.56749 3.59999 9.73172 3.4721 9.73172 3.31452V1.1773C9.73172 1.01985 9.56768 0.89212 9.36525 0.891829Z" fill="#91A4B1"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="10" height="14" fill="white" transform="translate(0 0.888916)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <svg width="22" height="9" viewBox="0 0 22 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8833 8.12796C21.8567 8.08679 21.8319 8.05264 21.8088 8.02527C21.4271 7.53238 20.6977 6.92736 19.621 6.21007L19.5982 6.19364L19.5869 6.18559L19.5753 6.17733H19.5638C19.0751 5.84333 18.7656 5.61875 18.636 5.50377C18.399 5.28474 18.3459 5.06303 18.4754 4.8384C18.567 4.66868 18.9109 4.31024 19.5064 3.76262C19.8195 3.47239 20.0676 3.23979 20.2508 3.06454C21.5721 1.80514 22.1448 1.00037 21.969 0.649911L21.9008 0.568013C21.855 0.518707 21.7366 0.473601 21.5459 0.432465C21.3548 0.391415 21.1105 0.384627 20.8126 0.411983L17.5138 0.428322C17.4604 0.414744 17.384 0.41601 17.2847 0.432465C17.1854 0.448919 17.1357 0.457175 17.1357 0.457175L17.0782 0.477743L17.0327 0.502454C16.9945 0.518793 16.9525 0.547531 16.9066 0.588609C16.861 0.629544 16.8229 0.677584 16.7923 0.732327C16.4332 1.39485 16.0249 2.01083 15.5666 2.58023C15.284 2.91976 15.0245 3.21401 14.7876 3.46316C14.5509 3.71222 14.3523 3.89572 14.1921 4.01335C14.0316 4.13109 13.8868 4.22542 13.7567 4.29667C13.6269 4.36795 13.5278 4.39807 13.459 4.38705C13.3903 4.37604 13.3255 4.36511 13.2641 4.35417C13.1573 4.30486 13.0714 4.23782 13.0066 4.15295C12.9415 4.06809 12.8977 3.96128 12.8748 3.8326C12.8519 3.70385 12.8385 3.59309 12.8347 3.49998C12.831 3.40698 12.8327 3.27543 12.8405 3.10571C12.8484 2.9359 12.8519 2.821 12.8519 2.76077C12.8519 2.55267 12.8577 2.32683 12.869 2.08318C12.8805 1.83952 12.8899 1.64647 12.8977 1.50425C12.9055 1.36188 12.9091 1.21126 12.9091 1.05247C12.9091 0.893679 12.8956 0.769147 12.869 0.678764C12.8427 0.588494 12.8023 0.500872 12.7491 0.415924C12.6955 0.331063 12.6171 0.265417 12.5142 0.218816C12.4112 0.172272 12.283 0.135335 12.1306 0.107893C11.7258 0.0422184 11.2103 0.00669178 10.584 0.0011686C9.16374 -0.00976266 8.25114 0.0559974 7.8464 0.198363C7.68605 0.258514 7.54093 0.3407 7.41119 0.444661C7.2737 0.565165 7.25453 0.630925 7.35378 0.641741C7.81203 0.690961 8.13643 0.808703 8.32737 0.994848L8.39617 1.09349C8.44969 1.16466 8.50312 1.29066 8.55661 1.47131C8.61001 1.65196 8.64447 1.8518 8.65963 2.07071C8.69775 2.47048 8.69775 2.81269 8.65963 3.09736C8.6214 3.38215 8.58529 3.60385 8.55083 3.76265C8.51637 3.92144 8.46486 4.05011 8.39617 4.14864C8.32737 4.24719 8.28158 4.30743 8.25864 4.32929C8.23573 4.35115 8.21663 4.36493 8.20147 4.37034C8.10221 4.39761 7.99898 4.41151 7.89214 4.41151C7.78514 4.41151 7.6554 4.37313 7.5027 4.29644C7.35005 4.21975 7.19162 4.11441 7.0274 3.98024C6.86319 3.84604 6.67801 3.65851 6.47175 3.41762C6.26565 3.17673 6.05181 2.89203 5.83035 2.56352L5.64712 2.32527C5.53258 2.172 5.37612 1.94883 5.17757 1.65596C4.9789 1.36297 4.80329 1.07956 4.65064 0.805793C4.58961 0.690817 4.49793 0.60328 4.37578 0.543043L4.31845 0.518333C4.28033 0.496471 4.21915 0.473255 4.13522 0.448517C4.05117 0.423806 3.96347 0.406086 3.87175 0.395183L0.733228 0.411523C0.412511 0.411523 0.194902 0.463619 0.0803196 0.567667L0.0344628 0.616886C0.0115545 0.644301 0 0.688084 0 0.74835C0 0.808585 0.0229083 0.882519 0.0687651 0.970051C0.526932 1.74215 1.02518 2.48677 1.5635 3.20403C2.10183 3.9213 2.56963 4.49907 2.96661 4.93684C3.36367 5.37492 3.7684 5.78839 4.18079 6.17702C4.59318 6.5658 4.86616 6.81495 4.99972 6.9244C5.13344 7.03406 5.23846 7.11604 5.31481 7.17079L5.60123 7.36786C5.7845 7.4993 6.05362 7.65671 6.40872 7.8401C6.7639 8.02362 7.15711 8.20423 7.58856 8.38233C8.02008 8.56018 8.52211 8.70523 9.09489 8.81746C9.6676 8.92977 10.225 8.97489 10.7672 8.95312H12.0846C12.3517 8.93656 12.5541 8.87638 12.6917 8.77243L12.7372 8.73125C12.7679 8.69852 12.7966 8.64781 12.823 8.57943C12.8498 8.51104 12.8632 8.43564 12.8632 8.35362C12.8553 8.11819 12.8803 7.90602 12.9375 7.71718C12.9946 7.52835 13.0596 7.38599 13.1324 7.29011C13.2051 7.19432 13.2872 7.11349 13.3786 7.04795C13.4701 6.98228 13.5354 6.9425 13.5736 6.9288C13.6117 6.91502 13.6421 6.90567 13.6649 6.90007C13.8482 6.85629 14.0639 6.89869 14.3123 7.02747C14.5606 7.15615 14.7934 7.31502 15.0111 7.50385C15.2288 7.69284 15.4903 7.90492 15.7956 8.14027C16.1013 8.37578 16.3685 8.5508 16.5974 8.66595L16.8264 8.76454C16.9795 8.83024 17.178 8.8905 17.4224 8.94523C17.6664 8.99997 17.8801 9.01369 18.0636 8.98633L20.9959 8.95352C21.2859 8.95352 21.5116 8.91905 21.6716 8.85075C21.8321 8.78228 21.9274 8.70688 21.958 8.62494C21.9887 8.54283 21.9904 8.44968 21.9639 8.34549C21.9367 8.24162 21.91 8.16898 21.8833 8.12796Z" fill="#91A4B1"/>
                    </svg>                    
                    <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1814 0.858432C19.4235 0.24871 18.0239 0 15.3511 0H5.64873C2.91473 0 1.49148 0.264753 0.736288 0.913888C0 1.5468 0 2.47935 0 3.77002V6.23003C0 8.73046 0.8736 10 5.64873 10H15.3511C17.669 10 18.9534 9.78057 19.7843 9.24246C20.6365 8.69067 21 7.78977 21 6.23003V3.77002C21 2.4089 20.9431 1.47085 20.1814 0.858432ZM13.4821 5.33965L9.07627 6.89768C8.97778 6.93252 8.87006 6.9498 8.76248 6.9498C8.64068 6.9498 8.51916 6.92761 8.41152 6.88352C8.20883 6.80042 8.08507 6.65177 8.08507 6.49143V3.38536C8.08507 3.22529 8.20849 3.07679 8.41078 2.99364C8.61312 2.91049 8.86477 2.90481 9.07471 2.9786L13.4806 4.52659C13.7047 4.60535 13.8454 4.76192 13.8457 4.93276C13.8461 5.10373 13.7059 5.26053 13.4821 5.33965Z" fill="#91A4B1"/>
                    </svg>

                </div>
            </div>
        </div>
    );
}

export default Footer;
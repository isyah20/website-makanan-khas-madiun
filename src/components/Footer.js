import styled from 'styled-components';

const footer = () => {
    return(
        <FooterContainer className="main-footer">
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Revike Adenia Prahadany</h4>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Madiun</h4>
                                <ul className="list-unstyled">
                                    <li>Ds. Mejayan</li>
                                    <li>Kecamatan Mejayan</li>
                                    <li>Jawa Timur</li>
                                </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Kontak</h4>
                                <ul className="list-unstyled">
                                    <li>revikeprahadany@gmail.com</li>
                                </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Sosial Media</h4>
                                <ul className="list-unstyled">
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Tiktok</li>
                                </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </FooterContainer> 
        
    );
}

export default footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark); 
    padding-top: 3rem;
    color: var(--mainWhite);

}
.footer-bottom {
    padding-top: 3rem;  
    padding-botton: 2rem;
;`

// import react from 'react';
// import styled from 'styled-components';

// const footer = () => {
// 	return(
// 	<FooterContainer className="main-footer">
// 		<FooterContainer className="footer-middle">
// 		<FooterContainer className="container">
// 			<FooterContainer className="row">
// 				<FooterContainer className="col-md-3 col-sm-6">
// 				<h4>About</h4>
// 				<ul className="list-unstyled">
// 					<li>Makanan Khas Kota Madiun</li>
// 					<li>Makanan khas Madiun terdiri dari nasi pecel, brem dan lontong sayur</li>
// 				</ul>
// 			</FooterContainer>
// 			<FooterContainer className="col-md-3 col-sm-6">
// 				<h4></h4>
// 				<ul className="list-unstyled">
// 					<li>Madiun adalah sebuah kota di Provinsi Jawa Timur, Indonesia. Kota terbesar ke-4 di Jawa Timur </li>
// 				</ul>
// 			</FooterContainer>
// 			</FooterContainer>
// 			<FooterContainer className="footer-bottom">
// 				<p className="text-xs-center">
// 					&copy;{new Date().getFullYear()} - All Rights Reserved
// 				</p>
// 				</FooterContainer>
// 			</FooterContainer>
// 			</FooterContainer>
// 		</FooterContainer>
// 	);
// }

// export default footer

// const FooterContainer = styled.footer`
// .footer-middle {
//     background: var(--mainDark);
//     padding-top: 3rem;
//     color: var(--mainWhite);
// }

// .footer-botton {
//     padding-top: 3rem;
//     padding-botton: 2rem;
// }
// `;
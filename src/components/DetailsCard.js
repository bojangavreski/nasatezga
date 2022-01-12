// import React, { useEffect} from "react";
import React, { useEffect } from 'react';

import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from 'semantic-ui-react';
import { TextField } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MediaQuery from 'react-responsive';
import DetailsCardMobile from '../pages/DetailsCardMobile';

export default function DetailsCard(props) {
	const [ open, setOpen ] = React.useState(false);

	useEffect(
		() => {
			setOpen(props.setDialogOpen);
		},
		[ props ]
	);

	const handleClose = () => {
		setOpen(false);
		props.setDialogClosed();
	};

	return (
		<div>
			<MediaQuery minWidth={1224}>
				<Dialog
					open={open}
					onClose={handleClose}
					onBackdropClick="true"
					aria-labelledby="form-dialog-title"
					className="desktop-only"
				>
					<DialogTitle id="form-dialog-title">Повеќе информации</DialogTitle>

					<DialogContent>
						<DialogContentText>
							<div>
								<h2>Слики од производите</h2>
								<Carousel autoPlay={false} interval="100" transitionTime="100">
									{props.product.images.map((image) => {
                    return (
											<div>
												<img src={image} alt= "slika" />
												<p className="legend">Мед</p>
											</div>
										);
									})}
								</Carousel>
							</div>
							<div>Произведено од:</div>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="default">
							Затвори
						</Button>
					</DialogActions>
				</Dialog>
			</MediaQuery>
			{/* <MediaQuery maxWidth={500}>
         <Router>
         <Route exact path="/detailscardmobile" component={DetailsCardMobile} />
         </Router>
               
       </MediaQuery> */}
		</div>
	);
}

// export default

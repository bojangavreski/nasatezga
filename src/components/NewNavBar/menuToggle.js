import React from 'react';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import CloseIcon from '@material-ui/icons/Close';

export function MenuToggle({ toggle, isOpen = false }) {
  
	if (isOpen === false) {
		return (
			<MenuTwoToneIcon
				onClick={toggle}
				style={{ color: 'darkgreen', cursor: 'pointer', width: '30px', height: '30px', viewBox: '0 0 23 23',}}
			/>
		);
	} else {
		if (isOpen === true){
      
			return (
				<CloseIcon
					onClick={toggle}
					style={{
						color: 'darkgreen',
						cursor: 'pointer',
						width: '30px',
						height: '30px',
						viewBox: '0 0 23 23'
					}}
				/>
			);
      }
	}
}

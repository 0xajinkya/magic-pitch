import { GREEN } from "@/constants";
import { Box, InputBase, Typography } from "@mui/material";

export const CustomInput = ({
	text,
	endIcon,
	inputComp,
	required,
	disabled,
	placeholder,
	type,
	styles
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "4px",
				width: "100%"
			}}
		>
			<Typography sx={{ fontWeight: 500, display: "flex", alignItems: "center" }}>
				{text} <span style={{ display: required ? "flex" : "none", color: "red" }}>*</span>
			</Typography>
			{inputComp ?? (
				<InputBase
					sx={{
						border: !disabled ? `1px solid ${GREEN}` : "1px solid grey",
						// color: !disabled ? "black" : "#6B6F80",
						width: "100%",
						py: "6px",
						borderRadius: "5px",
						px: "10px",
						...styles,
						"& .MuiInputBase-root.Mui-disabled": {
							backgroundColor: "#D09D9D9!important"
						}
					}}
					disabled={disabled}
					placeholder={placeholder}
					endAdornment={endIcon}
					type={type ?? "text"}
				/>
			)}
		</Box>
	);
};

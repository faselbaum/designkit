import * as React from "react";
import styled from "styled-components";
import colors from "../../atoms/colors";
import Copy, { Size as CopySize } from "../../atoms/copy";
import Headline, { Level, TextAlign } from "../../atoms/headline";

export interface TeaserProps {
	/** @ignore */ foo?: string;
	/** @name Copy Text */ copyText: string;
	/** @name Headline Level */ headlineLevel: Level;
	/** @name Headline Align */ headlineAlign?: TextAlign;
	/** @name Headline Text */ headlineText: string;
}

const StyledHero = styled.div`
	padding: 30px;
	background: ${colors.blue.toString()};
	color: ${colors.white.toString()};
	text-align: center;
`;

const Hero: React.StatelessComponent<TeaserProps> = (props): JSX.Element => {
	return (
		<StyledHero>
			<Headline level={props.headlineLevel} textAlign={props.headlineAlign}>
				{props.headlineText}
			</Headline>
			<Copy size={CopySize.Medium}>{props.copyText}</Copy>
		</StyledHero>
	);
};

export default Hero;

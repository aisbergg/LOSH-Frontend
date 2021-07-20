import * as React from "react";
import ShallowRenderer from "react-test-renderer/shallow"; // ES6
import Footer from "../footer";
import site from "../../../gatsby-config";

const renderer = ShallowRenderer.createRenderer();

jest.mock("antd", () => {
	return {
		Layout: {
			Footer: (): null => null,
		},
		Row: (): null => null,
		Typography: {
			Text: (): null => null,
		},
	};
});

const pagePadding = {
	paddingLeft: "1rem",
	paddingRight: "1rem",
};

describe("Footer", () => {
	it("renders correctly", () => {
		const tree = renderer.render(
			<Footer
				footerLinks={site.siteMetadata.footerLinks}
				pagePadding={pagePadding}
			/>
		);
		expect(tree).toMatchSnapshot();
	});
});

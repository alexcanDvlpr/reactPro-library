import React from "react";
import renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from "../data/Products";

describe("ProductTitle", () => {

    it("Debe mostrar el componente correctamente con el titulo personalizado", () => {
        const wrapper = renderer.create(
            <ProductTitle title="Title Test" />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });


    it("Debe mostrar el componente correctamente con el titulo del producto (Provider)", () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

});
import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import Container from "../components/container";


const RefundPolicy = () => {
    return (
        <>
            <Meta title="Refund Policy"/>
            <BreadCrumb title="Refund Policy"/>

            <Container class1="policy-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">

                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}
    export default RefundPolicy;
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllLeadsApi } from "../../apis";
import { toast } from "react-toastify";
import { IApiResponse, ILeadData } from "../../models";

const ApplicationList = () => {
    const tableRef = useRef() as MutableRefObject<HTMLTableElement>;
    const [page, setPage] = useState<number>(1);
    const [data, setData] = useState<IApiResponse>({
        count: 0,
        next: "",
        results: [],
        previous: "",
        per_page: 0,
    });

    const getAllLeads = (_page: number) => {
        getAllLeadsApi(_page, (res: IApiResponse) => {
            if(_page > 1){
                setData ({...data, ...res, results: [...data.results, ...res.results]})
            }else {
                setData(res);
            }
        }, (err: any) => {
            toast.error("Something went wrong!")
        })
    }

    const onNext = () => {
        console.log("next called");
        setPage((previous) => previous + 1)
        getAllLeads(page + 1)
    }

    useEffect(() => {
        getAllLeads(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=> {
        if(tableRef?.current && data.results.length > 0){
            if(tableRef?.current?.offsetHeight < window.innerHeight){
                onNext();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableRef, data.results.length])

  

    return (
        <InfiniteScroll
            dataLength={data.count}
            hasMore={page < Math.ceil(data.count / data.per_page)}
            loader={<h4>Loading...</h4>}
            next={onNext}
            
            scrollThreshold={"100px"}
        >
            <Container fluid className="mt-3" >
                <Row>
                    <Col xs={12}>
                        <Table ref={tableRef} responsive="md" striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan={1}>#</th>
                                    <th colSpan={1}>Full Name</th>
                                    <th colSpan={1} >Email</th>
                                    <th colSpan={2} >Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.results.map((lead: ILeadData, idx: number) => {
                                    return <tr key={lead.id}>
                                        <td>{idx + 1}</td>
                                        <td>{lead.name}</td>
                                        <td>{lead.email}</td>
                                        <td>{lead.message}</td>
                                    </tr>
                                })}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </InfiniteScroll>
    )
}

export { ApplicationList };
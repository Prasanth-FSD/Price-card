import React from 'react'


const Com = () => {
    const priceList = [{
        id: 1,
        name: "free",
        title: '$0/month',
        buttonText: "button",
        link: "https://www.google.com/",
        list: [
            { id: 1, name: 'Single User', icon: <i class="fa-solid fa-check"></i> },
            { id: 2, name: '50GB Storage', icon: <i class="fa-solid fa-check"></i> },
            { id: 3, name: 'Unlimited Public Projects', icon: <i class="fa-solid fa-check"></i> },
            { id: 4, name: 'Community Access', icon: <i class="fa-solid fa-check"></i> },
            { id: 5, name: 'Unlimited Private Projects', icon: <i class="fa-solid fa-xmark"></i> },
            { id: 6, name: 'Dedicated Phone Support', icon: <i class="fa-solid fa-xmark"></i> },
            { id: 7, name: 'Free Subdomain', icon: <i class="fa-solid fa-xmark"></i> },
            { id: 8, name: 'Monthly Status Reports', icon: <i class="fa-solid fa-xmark"></i> },]
    },
    {
        id: 2,
        name: "PLUS",
        title: '$9/month',
        buttonText: "button",
        link: "https://www.google.com/",
        list: [
            { id: 1, name: '5 Users', icon: <i class="fa-solid fa-check"></i> },
            { id: 2, name: '50GB Storage', icon: <i class="fa-solid fa-check"></i> },
            { id: 3, name: 'Unlimited Public Projects', icon: <i class="fa-solid fa-check"></i> },
            { id: 4, name: 'Community Access', icon: <i class="fa-solid fa-check"></i> },
            { id: 5, name: 'Unlimited Private Projects', icon: <i class="fa-solid fa-check"></i> },
            { id: 6, name: 'Dedicated Phone Support', icon: <i class="fa-solid fa-check"></i> },
            { id: 7, name: 'Free Subdomain', icon: <i class="fa-solid fa-check"></i> },
            { id: 8, name: 'Monthly Status Reports', icon: <i class="fa-solid fa-xmark"></i> },]
    },
    {
        id: 3,
        name: "Pro",
        title: '$49/month',
        buttonText: "button",
        link: "https://www.google.com/",
        list: [
            { id: 1, name: 'Unlimited users', icon: <i class="fa-solid fa-check"></i> },
            { id: 2, name: '50GB Storage', icon: <i class="fa-solid fa-check"></i> },
            { id: 3, name: 'Unlimited Public Projects', icon: <i class="fa-solid fa-check"></i> },
            { id: 4, name: 'Community Access', icon: <i class="fa-solid fa-check"></i> },
            { id: 5, name: 'Unlimited Private Projects', icon: <i class="fa-solid fa-check"></i> },
            { id: 6, name: 'Dedicated Phone Support', icon: <i class="fa-solid fa-check"></i> },
            { id: 7, name: 'Free Subdomain', icon: <i class="fa-solid fa-check"></i> },
            { id: 8, name: 'Monthly Status Reports', icon: <i class="fa-solid fa-check"></i> },]
    },
    ]
    return (
        <>

            <div className='container pt-5'>
                <h2 className='heading'>Price Card List</h2>
                <div className="row">
                    {priceList.map((item, index) =>
                        <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h6 className="card-title">{item.name}</h6>
                                    <h2 className="card-text">{item.title}</h2>
                                    <hr />
                                    <ul className="list-group list-group-flush">
                                        {item.list.map((item, index) =>
                                            <>

                                                <li key={index} className="list-group-item border-bottom-0">
                                                    {/* <i class="fa-solid fa-check"></i> */}
                                                    {item.icon}
                                                    <span className='ms-2'> {item.name}</span></li>
                                            </>
                                        )
                                        }


                                    </ul>
                                    <div className='card-foot'>
                                        <a href={item.link} className="btn btn-primary d-block" target="_blank">{item.buttonText}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}


export default Com


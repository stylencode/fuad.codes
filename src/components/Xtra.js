function Extra({data}) {

  const xtraData = data;

  return (
    <section id="experience mt-20">
      <div className="row banner">
        <div className="col-md-12 mx-auto pt-5">
          <div style={{ paddingBottom: '10px' }}>
            <h2 className="mb-5">
              Extra 
            </h2>
            {xtraData.map((d) => (
              <>
                <h4>{d.event}</h4>
                <p>{d.title}</p>
                <p>{d.years}</p>
                <p>{d.context}</p>
              </>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Extra;

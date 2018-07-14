{this.state.uploadWorkouts.map((i, idx) => {
    		return i.map((x, idx) => {
    			return <MetricsRow
		            exercise={x.exercise}
		            sets={x.sets}
		            reps={x.reps}
		            weight={x.weight}
		            time={x.time} />

		         })
		    })}

if (this.state.uploadWorkouts) {
    	work = (
    		{this.state.uploadWorkouts.map((i, idx) => {
		    	return (
		    		<div>
		    		<table id="tab_customers" className="table table-striped">
		    			<colgroup>
		    				<col width="20%"></col>
			                <col width="20%"></col>
			                <col width="20%"></col>
			                <col width="20%"></col>
		    			</colgroup>
		    			<thead>         
		                <tr className='warning'>
		                    <th>Exercise</th>
		                    <th>Sets</th>
		                    <th>Reps</th>
		                    <th>Weight</th>
		                </tr>
		            </thead>
		            <tbody>
		                <tr>
		                    return <MetricsRow
		                    			i={i} />
		                </tr>
	                </tbody>
		    		</table
		      	</div>
		   	)
		}))
    }


if (this.state.uploadWorkouts) {
    	work = (
    	<div>
    	{this.state.uploadWorkouts.map((i, idx) => {
    		<div>
    		<table id="tab_customers" className="table table-striped">
		    			<colgroup>
		    				<col width="20%"></col>
			                <col width="20%"></col>
			                <col width="20%"></col>
			                <col width="20%"></col>
		    			</colgroup>
		    			<thead>         
		                <tr className='warning'>
		                    <th>Exercise</th>
		                    <th>Sets</th>
		                    <th>Reps</th>
		                    <th>Weight</th>
		                </tr>
		            </thead>
		            <tbody>
		                <tr>
		                    return <MetricsRow />
		                </tr>
	                </tbody>
		    </table>
		    </div>
      	})}
      	</div>
    	)
    }
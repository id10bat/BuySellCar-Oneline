import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
    Authorities, DataDictionary, ERDiagram, Normalized, RelationSchema,
    Fact_FindingTechnics, SystemRequirementSpecification, Home, InputDesign,
    OutputDesign, FeasibilityStudy, Fishbone, ProjectSchedule,
    SystemRequest, SystemScopeDocument, ContextDiagram, DFDDiagram,
    ProcessDescription, ProcessingDescription, DataModel, DemandAnalysis,
    ProblemDetermination, ProcessModeling
} from '../doc'



class Pages extends React.Component {


    render() {

        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/Authorities" component={Authorities} />

                    <Route path="/ProblemDetermination" component={ProblemDetermination} />
                    <Route path="/SystemRequest" component={SystemRequest} />
                    <Route path="/Fishbone" component={Fishbone} />
                    <Route path="/SystemScopeDocument" component={SystemScopeDocument} />
                    <Route path="/ProjectSchedule" component={ProjectSchedule} />
                    <Route path="/FeasibilityStudy" component={FeasibilityStudy} />

                    <Route path="/DemandAnalysis" component={DemandAnalysis} />
                    <Route path="/SystemRequirementSpecification" component={SystemRequirementSpecification} />
                    <Route path="/Fact-FindingTechnics" component={Fact_FindingTechnics} />

                    <Route path="/ProcessModeling" component={ProcessModeling} />
                    <Route path="/ContextDiagram" component={ContextDiagram} />
                    <Route path="/DFDDiagram" component={DFDDiagram} />
                    <Route path="/ProcessDescription" component={ProcessDescription} />
                    <Route path="/ProcessingDescription" component={ProcessingDescription} />

                    <Route path="/DataModel" component={DataModel} />
                    <Route path="/ERDiagram" component={ERDiagram} />
                    <Route path="/DataDictionary" component={DataDictionary} />
                    <Route path="/RelationSchema" component={RelationSchema} />
                    <Route path="/Normalized" component={Normalized} />

                    <Route path="/OutputDesign" component={OutputDesign} />

                    <Route path="/InputDesign" component={InputDesign} />
                </Switch>
            </Router>

        )
    }
}

export default Pages;
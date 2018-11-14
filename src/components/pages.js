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



export const Pages = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/BuySellCar-Online/" component={Home} />

        <Route path="/BuySellCar-Online/Authorities" component={Authorities} />

        <Route path="/BuySellCar-Online/ProblemDetermination" component={ProblemDetermination} />
        <Route path="/BuySellCar-Online/SystemRequest" component={SystemRequest} />
        <Route path="/BuySellCar-Online/Fishbone" component={Fishbone} />
        <Route path="/BuySellCar-Online/SystemScopeDocument" component={SystemScopeDocument} />
        <Route path="/BuySellCar-Online/ProjectSchedule" component={ProjectSchedule} />
        <Route path="/BuySellCar-Online/FeasibilityStudy" component={FeasibilityStudy} />

        <Route path="/BuySellCar-Online/DemandAnalysis" component={DemandAnalysis} />
        <Route path="/BuySellCar-Online/SystemRequirementSpecification" component={SystemRequirementSpecification} />
        <Route path="/BuySellCar-Online/Fact-FindingTechnics" component={Fact_FindingTechnics} />

        <Route path="/BuySellCar-Online/ProcessModeling" component={ProcessModeling} />
        <Route path="/BuySellCar-Online/ContextDiagram" component={ContextDiagram} />
        <Route path="/BuySellCar-Online/DFDDiagram" component={DFDDiagram} />
        <Route path="/BuySellCar-Online/ProcessDescription" component={ProcessDescription} />
        <Route path="/BuySellCar-Online/ProcessingDescription" component={ProcessingDescription} />

        <Route path="/BuySellCar-Online/DataModel" component={DataModel} />
        <Route path="/BuySellCar-Online/ERDiagram" component={ERDiagram} />
        <Route path="/BuySellCar-Online/DataDictionary" component={DataDictionary} />
        <Route path="/BuySellCar-Online/RelationSchema" component={RelationSchema} />
        <Route path="/BuySellCar-Online/Normalized" component={Normalized} />

        <Route path="/BuySellCar-Online/OutputDesign" component={OutputDesign} />

        <Route path="/BuySellCar-Online/InputDesign" component={InputDesign} />
    </Switch>

)



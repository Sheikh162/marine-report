import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Report, Casualty } from '@/types';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    padding: 30,
    lineHeight: 1.5
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e3a8a',
    fontWeight: 'bold'
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#1e3a8a',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 3,
    fontWeight: 'bold'
  },
  subsectionTitle: {
    fontSize: 14,
    marginBottom: 8,
    color: '#1e3a8a',
    fontWeight: 'bold'
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  item: {
    width: '48%',
    marginBottom: 6,
    display: 'flex',
    flexDirection: 'row'
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5
  },
  value: {
    flex: 1
  },
  fullWidth: {
    width: '100%',
    marginBottom: 6
  },
  casualtyContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 5
  },
  casualtyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1e3a8a'
  }
});

interface ReportPDFProps {
  report: any//Report & { casualties?: Casualty[] };
}

export const ReportPDFTemplate: React.FC<ReportPDFProps> = ({ report }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>MARINE INCIDENT REPORT</Text>
      
      {/* Section 0: Broad Classification */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>0. Broad Classification of Incident</Text>
        <View style={styles.item}>
          <Text style={styles.label}>Incident Classification:</Text>
          <Text style={styles.value}>{report.incidentClassification}</Text>
        </View>
      </View>

      {/* Section 1: Ship & Reporting Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Ship & Reporting Information</Text>
        
        <View style={styles.grid}>
          <View style={styles.item}>
            <Text style={styles.label}>Ship Name:</Text>
            <Text style={styles.value}>{report.shipName}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>IMO Number:</Text>
            <Text style={styles.value}>{report.imoNumber}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Flag:</Text>
            <Text style={styles.value}>{report.flag}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Ship Type:</Text>
            <Text style={styles.value}>{report.shipType}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Registration Type:</Text>
            <Text style={styles.value}>{report.registrationType}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Position of Vessel:</Text>
            <Text style={styles.value}>{report.positionOfVessel}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Location of Vessel:</Text>
            <Text style={styles.value}>{report.locationOfVessel}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Area of Incident:</Text>
            <Text style={styles.value}>{report.areaOfIncident}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Deadweight:</Text>
            <Text style={styles.value}>{report.deadweight}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Year Built:</Text>
            <Text style={styles.value}>{report.yearBuilt?.toLocaleDateString()}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Gross Tonnage (GT):</Text>
            <Text style={styles.value}>{report.gt}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Draft Before:</Text>
            <Text style={styles.value}>{report.draftBefore}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Draft Aft:</Text>
            <Text style={styles.value}>{report.draftAft}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Freeboard:</Text>
            <Text style={styles.value}>{report.freeboard}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Cargo Type & Quantity:</Text>
            <Text style={styles.value}>{report.cargoTypeQty}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Bunkers:</Text>
            <Text style={styles.value}>{report.bunkers}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Classification Society:</Text>
            <Text style={styles.value}>{report.classificationSociety}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Last Port of Call:</Text>
            <Text style={styles.value}>{report.lastPortOfCall}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Next Port of Call:</Text>
            <Text style={styles.value}>{report.nextPortOfCall}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>P&I Club:</Text>
            <Text style={styles.value}>{report.piClub}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Hull & Machinery Underwriters:</Text>
            <Text style={styles.value}>{report.hullMachineryUnderwriters}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Loaded/Ballast Condition:</Text>
            <Text style={styles.value}>{report.conditionLoadedBallast}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Total Crew On Board:</Text>
            <Text style={styles.value}>{report.totalCrewOnBoard}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Date of Incident:</Text>
            <Text style={styles.value}>{report.incidentDate?.toLocaleDateString()}</Text>
          </View>
        </View>
      </View>

      {/* Section 2: Ownership & Management Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Ownership & Management Information</Text>
        
        <View style={styles.grid}>
          <View style={styles.item}>
            <Text style={styles.label}>Ownership Type:</Text>
            <Text style={styles.value}>{report.ownershipType}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Technical Manager Name:</Text>
            <Text style={styles.value}>{report.techManagerName}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Technical Manager Address:</Text>
            <Text style={styles.value}>{report.techManagerAddress}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Technical Manager Phone:</Text>
            <Text style={styles.value}>{report.techManagerPhone}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Technical Manager Email:</Text>
            <Text style={styles.value}>{report.techManagerEmail}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>DPA Name:</Text>
            <Text style={styles.value}>{report.dpaName}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>DPA Phone:</Text>
            <Text style={styles.value}>{report.dpaPhone}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>DPA Mobile:</Text>
            <Text style={styles.value}>{report.dpaMobile}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>DPA Email:</Text>
            <Text style={styles.value}>{report.dpaEmail}</Text>
          </View>
        </View>
      </View>

      {/* Section 3: Incident Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Incident Details</Text>
        
        <View style={styles.grid}>
          <View style={styles.item}>
            <Text style={styles.label}>Severity of Incident:</Text>
            <Text style={styles.value}>{report.severityOfIncident}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Incident Category:</Text>
            <Text style={styles.value}>{report.incidentCategory}</Text>
          </View>
          <View style={styles.fullWidth}>
            <Text style={styles.label}>Incident Consequences:</Text>
            <Text style={styles.value}>{report.incidentConsequences?.join(', ')}</Text>
          </View>
          {report.deaths && (
            <View style={styles.item}>
              <Text style={styles.label}>Deaths:</Text>
              <Text style={styles.value}>{report.deaths}</Text>
            </View>
          )}
          {report.injured && (
            <View style={styles.item}>
              <Text style={styles.label}>Injuries:</Text>
              <Text style={styles.value}>{report.injured}</Text>
            </View>
          )}
          {report.sickness && (
            <View style={styles.item}>
              <Text style={styles.label}>Sickness:</Text>
              <Text style={styles.value}>{report.sickness}</Text>
            </View>
          )}
          {report.desertion && (
            <View style={styles.item}>
              <Text style={styles.label}>Desertion:</Text>
              <Text style={styles.value}>{report.desertion}</Text>
            </View>
          )}
          {report.manOverboardSurvived && (
            <View style={styles.item}>
              <Text style={styles.label}>Man Overboard-Survived:</Text>
              <Text style={styles.value}>{report.manOverboardSurvived}</Text>
            </View>
          )}
        </View>

        <View style={styles.fullWidth}>
          <Text style={styles.label}>Brief Summary of Incident:</Text>
          <Text style={styles.value}>{report.summaryIncident}</Text>
        </View>

        <View style={styles.fullWidth}>
          <Text style={styles.label}>Actions Taken:</Text>
          <Text style={styles.value}>{report.summaryAction}</Text>
        </View>

        <View style={styles.fullWidth}>
          <Text style={styles.label}>Causal Factors:</Text>
          <Text style={styles.value}>{report.causalFactors}</Text>
        </View>

        <View style={styles.fullWidth}>
          <Text style={styles.label}>Lessons Learnt:</Text>
          <Text style={styles.value}>{report.lessonsLearnt}</Text>
        </View>
      </View>

      {/* Casualties Section */}
      {report.casualties && report.casualties.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Casualty Details</Text>
          
          {report.casualties.map((casualty:any, index:any) => (
            <View key={index} style={styles.casualtyContainer}>
              <Text style={styles.casualtyTitle}>Casualty #{index + 1}</Text>
              
              {/* Personal Information */}
              <Text style={styles.subsectionTitle}>Personal Information</Text>
              <View style={styles.grid}>
                <View style={styles.item}>
                  <Text style={styles.label}>Name:</Text>
                  <Text style={styles.value}>{casualty.name}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Status:</Text>
                  <Text style={styles.value}>{casualty.status}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Incident Sub Category:</Text>
                  <Text style={styles.value}>{casualty.incidentSubCategory}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Nationality:</Text>
                  <Text style={styles.value}>{casualty.nationality}</Text>
                </View>
                <View style={styles.fullWidth}>
                  <Text style={styles.label}>Residential Address:</Text>
                  <Text style={styles.value}>{casualty.residentialAddress}</Text>
                </View>
              </View>

              {/* Demographic Information */}
              <Text style={styles.subsectionTitle}>Demographic Information</Text>
              <View style={styles.grid}>
                <View style={styles.item}>
                  <Text style={styles.label}>Date of Birth:</Text>
                  <Text style={styles.value}>{casualty.dateOfBirth?.toLocaleDateString()}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Age:</Text>
                  <Text style={styles.value}>{casualty.age}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Marital Status:</Text>
                  <Text style={styles.value}>{casualty.maritalStatus}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Gender:</Text>
                  <Text style={styles.value}>{casualty.gender}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Education:</Text>
                  <Text style={styles.value}>{casualty.education}</Text>
                </View>
              </View>

              {/* Professional Information */}
              <Text style={styles.subsectionTitle}>Professional Information</Text>
              <View style={styles.grid}>
                <View style={styles.item}>
                  <Text style={styles.label}>Rank/Designation:</Text>
                  <Text style={styles.value}>{casualty.rank}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Date of Joining:</Text>
                  <Text style={styles.value}>{casualty.dateOfJoining?.toLocaleDateString()}</Text>
                </View>
              </View>

              {/* Documentation */}
              <Text style={styles.subsectionTitle}>Documentation</Text>
              <View style={styles.grid}>
                <View style={styles.item}>
                  <Text style={styles.label}>Insurance Cover:</Text>
                  <Text style={styles.value}>{casualty.insuranceCover}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>CDC Number:</Text>
                  <Text style={styles.value}>{casualty.cdcNumber}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>CDC Place of Issue:</Text>
                  <Text style={styles.value}>{casualty.cdcPlaceOfIssue}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Passport Number:</Text>
                  <Text style={styles.value}>{casualty.passportNumber}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Passport Place of Issue:</Text>
                  <Text style={styles.value}>{casualty.passportPlaceOfIssue}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>INDOS Number:</Text>
                  <Text style={styles.value}>{casualty.indosNumber}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>COC Number:</Text>
                  <Text style={styles.value}>{casualty.cocNumber}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>COC Issue Date:</Text>
                  <Text style={styles.value}>{casualty.cocIssueDate?.toLocaleDateString()}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>COC Place of Issue:</Text>
                  <Text style={styles.value}>{casualty.cocPlaceOfIssue}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Maritime Training:</Text>
                  <Text style={styles.value}>{casualty.maritimeTraining}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Collective Bargaining:</Text>
                  <Text style={styles.value}>{casualty.collectiveBargaining}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Next of Kin Details:</Text>
                  <Text style={styles.value}>{casualty.nextOfKinDetails}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Medical Reports:</Text>
                  <Text style={styles.value}>{casualty.medicalReports}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Mortal Remains Status:</Text>
                  <Text style={styles.value}>{casualty.mortalRemainsStatus}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Section 4: Additional Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Additional Information</Text>
        
        <View style={styles.grid}>
          <View style={styles.item}>
            <Text style={styles.label}>SAR Required:</Text>
            <Text style={styles.value}>{report.sarRequired ? 'Yes' : 'No'}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Oil Pollution Extent:</Text>
            <Text style={styles.value}>{report.oilPollutionExtent}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Oil Spilled Volume:</Text>
            <Text style={styles.value}>{report.oilSpilledVolume}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Weather Conditions:</Text>
            <Text style={styles.value}>{report.weatherConditions}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Tidal Conditions:</Text>
            <Text style={styles.value}>{report.tidalConditions}</Text>
          </View>
          <View style={styles.fullWidth}>
            <Text style={styles.label}>Media URLs:</Text>
            <Text style={styles.value}>{report.mediaUrls}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Reported By:</Text>
            <Text style={styles.value}>{report.reportedBy}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Company Name:</Text>
            <Text style={styles.value}>{report.companyName}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Designation:</Text>
            <Text style={styles.value}>{report.designation}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Contact Number:</Text>
            <Text style={styles.value}>{report.contactNumber}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
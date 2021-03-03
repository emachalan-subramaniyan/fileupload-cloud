import React, { useState, useEffect }  from 'react';
import GooglePicker from 'react-google-picker';




const UploadData = (props) => {
    return(
        <GooglePicker clientId={'117392774494-cffu7uei4ain553kknt7q5vedda8nc62.apps.googleusercontent.com'}
        developerKey={'AIzaSyBEDOzxAlvNp7bQT1347nQCdzxM3TNzEJQ'}
        scope={['https://www.googleapis.com/auth/drive.readonly']}
        onChange={data => console.log('on change:', data)}
        onAuthFailed={data => console.log('on auth failed:', data)}
        multiselect={true}
        navHidden={true}
        authImmediate={false}
        viewId={'DOCS'}
        mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
        createPicker={ (google, oauthToken) => {
          const googleViewId = google.picker.ViewId.DOCS;
          const uploadView = new google.picker.DocsUploadView();
          const docsView = new google.picker.DocsView(googleViewId)
              .setIncludeFolders(true)
              .setSelectFolderEnabled(true);

          const picker = new window.google.picker.PickerBuilder()
          .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
              .addView(docsView)
              .addView(uploadView)/*DocsUploadView added*/
              .setOAuthToken(oauthToken)
              .setDeveloperKey('AIzaSyBEDOzxAlvNp7bQT1347nQCdzxM3TNzEJQ')
              .setCallback((data)=>{
                if (data.action === google.picker.Action.PICKED) {
                    var fileId = data.docs[0].id;
                    console.log('The user selected: ' + fileId, data.docs[0]);
                    // picker();
                }
              });
          picker.build().setVisible(true);
      }}>
      <span>Click</span>
      <div className="google"></div>
  </GooglePicker>
    )
}


export default UploadData;
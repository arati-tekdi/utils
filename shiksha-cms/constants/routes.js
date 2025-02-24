module.exports = {
  routes: [
    {
      sourceRoute: "/interface/v1/api/question/v2/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/question/v2/list",
        type: "POST",
        functionName: "listQuestions",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/list",
        type: "POST",
        functionName: "listQuestions",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/private/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/private/read/:identifier",
        type: "GET",
        functionName: "readQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/read/:identifier",
        type: "GET",
        functionName: "readQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/hierarchy/update",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/hierarchy/update",
        type: "PATCH",
        functionName: "updateQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/hierarchy/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/hierarchy/:identifier",
        type: "GET",
        functionName: "getQuestionsetHierarchy",
      },
    },
    {
      sourceRoute:
        "/interface/v1/action/questionset/v2/comment/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/comment/read/:identifier",
        type: "GET",
        functionName: "readQuestionsetComment",
      },
    },
    {
      sourceRoute: "/interface/v1/api/channel/v1/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/channel/v1/read/:identifier",
        type: "GET",
        functionName: "readChannel",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/read/:identifier",
        type: "GET",
        functionName: "readFramewark",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/read/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/read/:identifier",
        type: "POST",
        functionName: "readQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/asset/v1/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/asset/v1/read/:identifier",
        type: "GET",
        functionName: "readAsset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/read/:identifier",
        type: "GET",
        functionName: "readContent",
      },
    },
    {
      sourceRoute: "/interface/v1/api/content/v1/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/content/v1/read/:identifier",
        type: "GET",
        functionName: "readContent",
      },
    },
    {
      sourceRoute:
        "/interface/v1/action/questionset/private/v2/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/private/v2/read/:identifier",
        type: "GET",
        functionName: "readQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/create",
        type: "POST",
        functionName: "createQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/update/:identifier",
        type: "PATCH",
        functionName: "updateQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/review/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/review/:identifier",
        type: "POST",
        functionName: "reviewQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/publish/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/publish/:identifier",
        type: "POST",
        functionName: "publishQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/retire/:identifier",
        type: "DELETE",
        functionName: "retireQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/reject/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/reject/:identifier",
        type: "POST",
        functionName: "rejectQuestionset",
      },
    },
    {
      sourceRoute:
        "/interface/v1/action/questionset/v2/comment/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/comment/update/:identifier",
        type: "PATCH",
        functionName: "updateQuestionsetComment",
      },
    },
    {
      sourceRoute: "/interface/v1/action/composite/v3/search",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/composite/v3/search",
        type: "POST",
        functionName: "searchAction",
      },
    },
    {
      sourceRoute: "/interface/v1/action/object/category/definition/v1/read",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/object/category/definition/v1/read",
        type: "POST",
        functionName: "readObjectCategoryDefination",
      },
    },

    {
      sourceRoute: "/interface/v1/action/asset/v1/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/asset/v1/create",
        type: "POST",
        functionName: "createAsset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/asset/v1/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/asset/v1/update/:identifier",
        type: "PATCH",
        functionName: "updateAsset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/asset/v1/copy/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "",
        type: "POST",
        functionName: "copyAsset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/asset/v1/upload/url/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/asset/v1/upload/url/:identifier",
        type: "POST",
        functionName: "uploadURLAsset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/asset/v1/upload/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/asset/v1/upload/:identifier",
        type: "POST",
        functionName: "uploadAsset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/upload/url/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/upload/url/:identifier",
        type: "POST",
        functionName: "uploadURLContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/copy/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/copy/:identifier",
        type: "POST",
        functionName: "copyContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/import",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/import",
        type: "POST",
        functionName: "importContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/dialcode/link",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/dialcode/link",
        type: "POST",
        functionName: "decodeLink",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/create",
        type: "POST",
        functionName: "createContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/upload/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/upload/:identifier",
        type: "POST",
        functionName: "uploadContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/update/:identifier",
        type: "PATCH",
        functionName: "updateContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/review/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/review/:identifier",
        type: "POST",
        functionName: "reviewContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/reject/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/reject/:identifier",
        type: "POST",
        functionName: "rejectContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/publish/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/publish/:identifier",
        type: "POST",
        functionName: "publishContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/retire/:identifier",
        type: "DELETE",
        functionName: "retireContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/hierarchy/add",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/hierarchy/add",
        type: "PATCH",
        functionName: "addHierarchyContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/hierarchy/update",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/hierarchy/update",
        type: "PATCH",
        functionName: "updateHierarchyContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/hierarchy/remove",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/hierarchy/remove",
        type: "DELETE",
        functionName: "removeHierarchyContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v3/hierarchy/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/content/v3/hierarchy/:identifier",
        type: "GET",
        functionName: "getHierarchyContent",
      },
    },
    {
      sourceRoute: "/interface/v1/api/course/v1/hierarchy/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/course/v1/hierarchy/:identifier",
        type: "GET",
        functionName: "getHierarchyCourse",
      },
    },
    {
      sourceRoute: "/interface/v1/action/license/v3/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/license/v3/create",
        type: "POST",
        functionName: "createLicense",
      },
    },
    {
      sourceRoute: "/interface/v1/action/license/v3/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/license/v3/read/:identifier",
        type: "GET",
        functionName: "readLicense",
      },
    },
    {
      sourceRoute: "/interface/v1/action/license/v3/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/license/v3/update/:identifier",
        type: "PATCH",
        functionName: "updateLicense",
      },
    },
    {
      sourceRoute: "/interface/v1/action/license/v3/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/license/v3/retire/:identifier",
        type: "DELETE",
        functionName: "deleteLicense",
      },
    },
    {
      sourceRoute: "/interface/v1/action/asset/v3/validate",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/asset/v3/validate",
        type: "POST",
        functionName: "validateAsset",
      },
    },
    {
      sourceRoute: "/interface/v1/api/channel/v1/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/channel/v1/create",
        type: "POST",
        functionName: "createChannel",
      },
    },
    {
      sourceRoute: "/interface/v1/api/channel/v1/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/channel/v1/update/:identifier",
        type: "PATCH",
        functionName: "updateChannel",
      },
    },
    {
      sourceRoute: "/interface/v1/api/channel/v1/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/channel/v1/retire/:identifier",
        type: "DELETE",
        functionName: "updateChannel",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/create",
        type: "POST",
        functionName: "createFramework",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/update/:identifier",
        type: "PATCH",
        functionName: "updateFramework",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/list",
        type: "POST",
        functionName: "fetchListFramework",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/copy/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/copy/:identifier",
        type: "POST",
        functionName: "copyFramework",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/retire/:identifier",
        type: "DELETE",
        functionName: "retireFramework",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/publish/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/publish/:identifier",
        type: "POST",
        functionName: "publishFramework",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/category/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/category/create",
        type: "POST",
        functionName: "createFrameworkCategory",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/category/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/category/read/:identifier",
        type: "GET",
        functionName: "fetchFrameworkCategory",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/category/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/category/update/:identifier",
        type: "PATCH",
        functionName: "updateFrameworkCategory",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/category/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/category/retire/:identifier",
        type: "DELETE",
        functionName: "retireFrameworkCategory",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/category/master/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/category/master/create",
        type: "POST",
        functionName: "createFrameworkCategoryMaster",
      },
    },
    {
      sourceRoute:
        "/interface/v1/api/framework/v1/category/master/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/category/master/update/:identifier",
        type: "PATCH",
        functionName: "updateFrameworkCategoryMaster",
      },
    },
    {
      sourceRoute:
        "/interface/v1/api/framework/v1/category/master/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/category/master/read/:identifier",
        type: "GET",
        functionName: "fetchFrameworkCategoryMaster",
      },
    },
    {
      sourceRoute:
        "/interface/v1/api/framework/v1/category/master/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/category/master/retire/:identifier",
        type: "DELETE",
        functionName: "retireFrameworkCategoryMaster",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/term/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/term/create",
        type: "POST",
        functionName: "createFrameworkTerm",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/term/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/term/read/:identifier",
        type: "GET",
        functionName: "fetchFrameworkTerm",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/term/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/term/update/:identifier",
        type: "PATCH",
        functionName: "updateFrameworkTerm",
      },
    },
    {
      sourceRoute: "/interface/v1/api/framework/v1/term/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/framework/v1/term/retire/:identifier",
        type: "DELETE",
        functionName: "deleteFrameworkTerm",
      },
    },
    {
      sourceRoute: "/interface/v1/api/object/category/v1/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/object/category/v1/create",
        type: "POST",
        functionName: "createObjectCategory",
      },
    },
    {
      sourceRoute: "/interface/v1/api/object/category/v1/update",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/object/category/v1/update",
        type: "PATCH",
        functionName: "updateObjectCategory",
      },
    },
    {
      sourceRoute: "/interface/v1/api/object/category/v1/read",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/object/category/v1/read",
        type: "GET",
        functionName: "readObjectCategory",
      },
    },
    {
      sourceRoute: "/interface/v1/api/object/category/v1/retire",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/object/category/v1/retire",
        type: "DELETE",
        functionName: "retireObjectCategory",
      },
    },
    {
      sourceRoute: "/interface/v1/api/object/category/definition/v1/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/object/category/definition/v1/create",
        type: "POST",
        functionName: "createObjectCategoryDefination",
      },
    },
    {
      sourceRoute:
        "/interface/v1/api/object/category/definition/v1/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/object/category/definition/v1/update/:identifier",
        type: "POST",
        functionName: "updateObjectCategoryDefination",
      },
    },
    {
      sourceRoute: "/interface/v1/api/object/category/definition/v1/update",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/object/category/definition/v1/update",
        type: "POST",
        functionName: "updateObjectCategoryDefination",
      },
    },
    {
      sourceRoute:
        "/interface/v1/api/object/category/definition/v1/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/object/category/definition/v1/read/:identifier",
        type: "GET",
        functionName: "fetchObjectCategoryDefination",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/create",
        type: "POST",
        functionName: "createQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/update/:identifier",
        type: "PATCH",
        functionName: "updateQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/review/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/review/:identifier",
        type: "POST",
        functionName: "reviewQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/publish/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/publish/:identifier",
        type: "POST",
        functionName: "publishQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/retire/:identifier",
        type: "DELETE",
        functionName: "deleteQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/copy/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/copy/:identifier",
        type: "POST",
        functionName: "copyQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/reject/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/reject/:identifier",
        type: "POST",
        functionName: "rejectQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/system/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/system/update/:identifier",
        type: "PATCH",
        functionName: "updateQuestionSystem",
      },
    },
    {
      sourceRoute: "/interface/v1/action/question/v2/import",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/question/v2/import",
        type: "POST",
        functionName: "importQuestion",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/import",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/import",
        type: "POST",
        functionName: "importQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/copy/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/copy/:identifier",
        type: "POST",
        functionName: "copyQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/add",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/add",
        type: "PATCH",
        functionName: "addQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/add",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/add",
        type: "PATCH",
        functionName: "addQuestionset",
      },
    },
    {
      sourceRoute: "/interface/v1/action/questionset/v2/remove",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/remove",
        type: "DELETE",
        functionName: "deleteQuestionset",
      },
    },
    {
      sourceRoute:
        "/interface/v1/action/questionset/v2/system/update/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/questionset/v2/system/update/:identifier",
        type: "DELETE",
        functionName: "updateQuestionsetSystem",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/create",
        type: "POST",
        functionName: "createCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/update/:identifier",
        type: "PATCH",
        functionName: "updateCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/read/:identifier",
        type: "GET",
        functionName: "getCollection",
      },
    },
    {
      sourceRoute:
        "/interface/v1/action/collection/v1/private/read/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/private/read/:identifier",
        type: "GET",
        functionName: "getCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/hierarchy/add",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/hierarchy/add",
        type: "PATCH",
        functionName: "addCollectionHierarchy",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/hierarchy/remove",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/hierarchy/remove",
        type: "DELETE",
        functionName: "removeCollectionHierarchy",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/hierarchy/update",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/hierarchy/update",
        type: "PATCH",
        functionName: "removeCollectionHierarchy",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/hierarchy/:identifier",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/hierarchy/:identifier",
        type: "GET",
        functionName: "removeCollectionHierarchy",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/flag/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/flag/:identifier",
        type: "POST",
        functionName: "flagCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/flag/accept/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/flag/accept/:identifier",
        type: "POST",
        functionName: "flagCollectionAccept",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/discard/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/flag/accept/:identifier",
        type: "DELETE",
        functionName: "discardCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/retire/:identifier",
      type: "DELETE",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/retire/:identifier",
        type: "DELETE",
        functionName: "retireCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/copy/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/copy/:identifier",
        type: "POST",
        functionName: "copyCollection",
      },
    },
    {
      sourceRoute:
        "/interface/v1/action/collection/v1/system/update/:identifier",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/system/update/:identifier",
        type: "PATCH",
        functionName: "collectionSystemUpdate",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/reject/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/reject/:identifier",
        type: "POST",
        functionName: "rejectCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/publish/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/publish/:identifier",
        type: "POST",
        functionName: "publishCollection",
      },
    },
    {
      sourceRoute:
        "/interface/v1/action/collection/v1/unlisted/publish/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/unlisted/publish/:identifier",
        type: "POST",
        functionName: "publishCollectionUnlisted",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/import/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/import/:identifier",
        type: "POST",
        functionName: "importCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/export/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/export/:identifier",
        type: "POST",
        functionName: "exportCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/action/collection/v1/review/:identifier",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/action/collection/v1/review/:identifier",
        type: "POST",
        functionName: "reviewCollection",
      },
    },
    {
      sourceRoute: "/interface/v1/api/content/v1/bundle",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/content/v1/bundle",
        type: "POST",
        functionName: "bundleContent",
      },
    },
    {
      sourceRoute: "/interface/v1/action/content/v1/bundle",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/api/content/v1/bundle",
        type: "POST",
        functionName: "bundleContent",
      },
    },
  ],
};

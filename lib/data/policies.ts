import { site } from "./site";

type Policy = {
  title: string;
  description: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const policyUpdated = "16/09/2026";
export const policies: Record<string, Policy> = {
  "dieu-khoan": {
    title: "Chính sách và bảo mật",
    description: `${site.name} là website cá nhân của Huy Hoàng, phục vụ chia sẻ thông tin và tư vấn về xe VinFast. Trang này giải thích phạm vi hoạt động và nguyên tắc bảo vệ người truy cập.`,
    sections: [
      { heading: "Người phụ trách website", paragraphs: [
        `Huy Hoàng là người phụ trách nội dung và tiếp nhận yêu cầu tư vấn qua số ${site.phone}, email ${site.email}. Tên “${site.name}” được sử dụng để nhận diện kênh tư vấn cá nhân.`,
      ] },
      { heading: "Phạm vi tư vấn", paragraphs: [
        "Website giới thiệu mẫu xe, hình ảnh, trang bị, giá tham khảo, ưu đãi và công cụ ước tính trả góp. Bạn có thể yêu cầu tư vấn, hỏi phiên bản hoặc đề nghị sắp xếp lái thử. Lịch hẹn chỉ được xác nhận sau khi hai bên trao đổi trực tiếp.",
        "Website hiện không có chức năng đặt hàng, thanh toán hay nhận tiền đặt cọc trực tuyến. Hợp đồng mua xe, hóa đơn, bảo hành, giao xe và tài trợ vốn do đơn vị có thẩm quyền thực hiện theo thỏa thuận riêng với khách hàng."
      ] },
      { heading: "Nguyên tắc tiếp nhận thông tin", paragraphs: [
        "Bạn được xem nội dung mà không cần tạo tài khoản. Chỉ cung cấp thông tin cần thiết khi muốn nhận tư vấn; việc truy cập website không được hiểu là đồng ý nhận quảng cáo hoặc chia sẻ dữ liệu cho đại lý, ngân hàng.",
        "Thông tin bạn chủ động gửi được sử dụng để phản hồi nhu cầu đã nêu. Trường hợp cần chuyển thông tin cho một bên khác để sắp xếp lái thử hoặc hỗ trợ hồ sơ, người tư vấn sẽ giải thích bên nhận, mục đích và xin ý kiến của bạn trước, trừ trường hợp pháp luật quy định khác."
      ] },
      { heading: "Phản hồi và xử lý sai sót", paragraphs: [
        `Nếu phát hiện giá, nội dung, hình ảnh chưa chính xác hoặc có vấn đề về quyền sử dụng, vui lòng gửi đường dẫn và mô tả tới ${site.email}. Huy Hoàng sẽ kiểm tra, phản hồi và điều chỉnh hoặc gỡ nội dung khi có căn cứ.`,
        "Các yêu cầu về dữ liệu cá nhân được tiếp nhận qua cùng đầu mối liên hệ. Chi tiết về thông tin xử lý và cách thực hiện quyền được trình bày tại trang Bảo mật thông tin cá nhân."
      ] },
      { heading: "Cập nhật chính sách", paragraphs: [
        "Chính sách được cập nhật khi chức năng hoặc cách tiếp nhận thông tin thay đổi; ngày cập nhật được ghi trên mỗi trang. Nếu bổ sung biểu mẫu gửi trực tiếp, công cụ theo dõi hoặc mục đích sử dụng dữ liệu mới, thông tin liên quan sẽ được thông báo trước khi áp dụng."
      ] }
    ]
  },
  "su-dung": {
    title: "Điều khoản sử dụng",
    description: "Các nguyên tắc khi truy cập và sử dụng website cá nhân Huy Hoàng Ôtô VinFast, áp dụng cho nội dung giới thiệu xe và hoạt động liên hệ tư vấn.",
    sections: [
      { heading: "Sử dụng website", paragraphs: [
        "Bạn có thể đọc thông tin, so sánh mẫu xe, chọn màu ngoại thất và sử dụng công cụ trả góp để tham khảo. Khi liên hệ, vui lòng cung cấp thông tin chính xác của mình; không sử dụng thông tin người khác nếu chưa có sự cho phép phù hợp.",
        "Không gửi thư rác, nội dung trái pháp luật, mã độc; không giả mạo danh tính, tìm cách truy cập trái phép hoặc thực hiện hành vi làm gián đoạn hoạt động website."
      ] },
      { heading: "Nội dung và quyền sở hữu", paragraphs: [
        "Nội dung do Huy Hoàng biên soạn được dùng để hỗ trợ tìm hiểu xe. Nhãn hiệu VinFast, logo, ảnh và tài liệu của bên thứ ba thuộc chủ thể có quyền tương ứng; việc xuất hiện trên website không chuyển giao quyền sở hữu hoặc tạo ra sự bảo chứng của hãng đối với website cá nhân.",
        "Khi trích dẫn nội dung, vui lòng ghi nguồn và giữ đúng ngữ cảnh. Việc sử dụng lại hình ảnh, nhãn hiệu hoặc nội dung cho mục đích thương mại cần có quyền sử dụng phù hợp từ chủ thể có quyền."
      ] },
      { heading: "Báo giá, ưu đãi và lịch hẹn", paragraphs: [
        "Giá và chương trình ưu đãi có thể thay đổi theo phiên bản, màu xe, thời điểm và điều kiện áp dụng. Tiêu đề ưu đãi cập nhật theo tháng không đồng nghĩa tất cả chương trình tự động được gia hạn. Hãy xác nhận báo giá và điều kiện áp dụng trước khi quyết định.",
        "Việc soạn bản nháp, gửi email hoặc nhắn tin hỏi xe không tự tạo thành đơn đặt hàng, hợp đồng mua bán hay cam kết giao xe. Yêu cầu lái thử cần được xác nhận về thời gian, địa điểm và điều kiện tham gia."
      ] },
      { heading: "Giao dịch với đại lý hoặc ngân hàng", paragraphs: [
        "Cá nhân vận hành website hỗ trợ trao đổi thông tin, không thay thế đơn vị ký hợp đồng mua xe hoặc tổ chức cho vay. Trước khi chuyển tiền, cần kiểm tra pháp nhân nhận tiền, thông tin tài khoản, nội dung hợp đồng và chứng từ trực tiếp với bên giao dịch.",
        "Điều kiện thanh toán, giao nhận, đổi trả, bảo hành và giải quyết khoản vay được xác định trong hồ sơ của đơn vị cung cấp tương ứng và quy định pháp luật. Website không tự đặt ra chính sách bảo hành hoặc phê duyệt khoản vay thay các đơn vị đó."
      ] },
      { heading: "Liên kết và giải quyết phản ánh", paragraphs: [
        "Các liên kết Zalo, bản đồ, email và website khác phục vụ tra cứu hoặc liên hệ. Khi sử dụng dịch vụ bên ngoài, bạn cần xem điều khoản của dịch vụ đó.",
        `Nếu có phản ánh liên quan đến nội dung hoặc quá trình tư vấn, vui lòng liên hệ ${site.phone} hoặc ${site.email}. Hai bên ưu tiên trao đổi để làm rõ và giải quyết; điều khoản này không hạn chế quyền khiếu nại, yêu cầu bồi thường hoặc sử dụng cơ chế giải quyết tranh chấp theo pháp luật.`
      ] }
    ]
  },
  "bao-mat": {
    title: "Bảo mật thông tin cá nhân",
    description: "Chính sách này mô tả thông tin được sử dụng khi bạn truy cập website cá nhân hoặc chủ động liên hệ Huy Hoàng để được tư vấn xe.",
    sections: [
      { heading: "Người tiếp nhận và đầu mối liên hệ", paragraphs: [
        `Huy Hoàng là người tiếp nhận yêu cầu tư vấn qua ${site.email}, điện thoại/Zalo ${site.phone}. Bạn có thể dùng các kênh này để hỏi về việc sử dụng thông tin của mình hoặc yêu cầu hỗ trợ quyền riêng tư.`
      ] },
      { heading: "Thông tin trong biểu mẫu và kênh liên hệ", paragraphs: [
        "Biểu mẫu gồm họ tên, số điện thoại, dòng xe quan tâm và lời nhắn. Khi bạn bấm gửi, dữ liệu được chuyển qua dịch vụ Formspree để tiếp nhận yêu cầu tư vấn cho Huy Hoàng.",
        "Nếu bạn chọn liên hệ bằng email thay vì biểu mẫu, Huy Hoàng chỉ nhận nội dung khi bạn gửi thư từ ứng dụng email. Nếu liên hệ bằng Zalo hoặc điện thoại, thông tin nhận được là nội dung bạn chia sẻ và thông tin tài khoản/số gọi mà dịch vụ hiển thị.",
        "Không gửi mật khẩu, mã OTP, thông tin thẻ thanh toán, ảnh căn cước hoặc hồ sơ tài chính qua biểu mẫu hỏi xe. Nếu cần hồ sơ cho một giao dịch cụ thể, hãy xác nhận trực tiếp kênh tiếp nhận của đơn vị thực hiện giao dịch."
      ] },
      { heading: "Mục đích sử dụng và chia sẻ", paragraphs: [
        "Thông tin được dùng để trả lời câu hỏi, liên hệ về mẫu xe bạn quan tâm, trao đổi báo giá hoặc sắp xếp lịch hẹn theo đề nghị. Không bán dữ liệu hoặc mặc nhiên dùng yêu cầu tư vấn làm sự đồng ý nhận quảng cáo không liên quan.",
        "Việc chuyển thông tin cho đại lý, đơn vị tổ chức lái thử hoặc bên hỗ trợ khoản vay cần được thông báo rõ và có sự đồng ý phù hợp trước khi thực hiện, trừ trường hợp pháp luật cho phép hoặc yêu cầu khác. Không tự động chuyển nội dung biểu mẫu cho các đơn vị này.",
        "Khi bạn sử dụng Formspree, email, Zalo hoặc bản đồ, nhà cung cấp dịch vụ xử lý dữ liệu theo chính sách riêng. Một số dịch vụ có thể lưu trữ hoặc xử lý dữ liệu ngoài Việt Nam; chính sách này không thay thế chính sách của họ."
      ] },
      { heading: "Lưu trữ trên thiết bị và dữ liệu kỹ thuật", paragraphs: [
        "Website ghi nhớ lựa chọn nền sáng/tối trong bộ nhớ trình duyệt trên thiết bị. Bạn có thể xóa lựa chọn này bằng chức năng xóa dữ liệu trang web của trình duyệt. Website hiện không gắn công cụ phân tích hành vi hoặc quảng cáo để theo dõi người truy cập.",
        "Dữ liệu nhập vào công cụ trả góp được tính trong trình duyệt, không tự gửi thành hồ sơ vay. Yêu cầu tư vấn được xử lý qua Formspree và kênh nhận thư của Huy Hoàng. Bạn có thể liên hệ Huy Hoàng để yêu cầu kiểm tra hoặc xóa thông tin đã gửi.",
        "Hạ tầng phục vụ website có thể phát sinh nhật ký kỹ thuật như địa chỉ IP, thời điểm truy cập, trình duyệt hoặc lỗi truy cập nhằm phục vụ vận hành và bảo vệ hệ thống. Đây không phải nội dung biểu mẫu đã được gửi cho người tư vấn."
      ] },
      { heading: "Thời gian lưu và bảo vệ thông tin", paragraphs: [
        "Email và tin nhắn đã gửi được lưu trong kênh liên hệ trong thời gian cần thiết để giải quyết nhu cầu tư vấn, theo dõi lịch hẹn hoặc xử lý phản ánh. Khi không còn cần thiết, dữ liệu cần được xóa hoặc ẩn danh, trừ phần phải lưu theo nghĩa vụ pháp luật hoặc để giải quyết tranh chấp.",
        "Thông tin tư vấn cần được giới hạn truy cập trong phạm vi phục vụ yêu cầu của bạn. Không có phương thức truyền hoặc lưu trữ trực tuyến nào bảo đảm an toàn tuyệt đối; nếu nghi ngờ thông tin bị sử dụng sai mục đích, hãy báo ngay qua đầu mối liên hệ ở trên."
      ] },
      { heading: "Quyền và cách gửi yêu cầu", paragraphs: [
        "Bạn có thể yêu cầu được biết, xem, chỉnh sửa, cung cấp, xóa hoặc hạn chế xử lý thông tin; phản đối việc xử lý hoặc rút lại sự đồng ý, theo điều kiện của pháp luật. Bạn cũng có quyền khiếu nại và sử dụng các biện pháp bảo vệ quyền lợi theo quy định.",
        `Gửi yêu cầu đến ${site.email} hoặc ${site.phone}, nêu kênh đã liên hệ, nội dung cần xử lý và cách nhận phản hồi. Việc xác minh sẽ giới hạn ở thông tin cần thiết để tránh cung cấp dữ liệu cho nhầm người. Không gửi sẵn giấy tờ định danh khi chưa có hướng dẫn cụ thể.`,
        "Yêu cầu sẽ được kiểm tra và xử lý trong thời hạn pháp luật áp dụng. Nếu có căn cứ cần tiếp tục lưu một phần thông tin hoặc không thể đáp ứng yêu cầu, người tiếp nhận sẽ giải thích lý do. Bạn có thể dừng trao đổi tư vấn bất cứ lúc nào."
      ] }
    ]
  },
  "mien-tru": {
    title: "Miễn trừ trách nhiệm",
    description: "Thông tin về giới hạn của nội dung tham khảo và vai trò tư vấn cá nhân trên website Huy Hoàng Ôtô VinFast.",
    sections: [
      { heading: "Tư cách website cá nhân", paragraphs: [
        "Website do Huy Hoàng phụ trách để chia sẻ thông tin và hỗ trợ tư vấn xe. Đây không phải website chính thức của VinFast, Vingroup hoặc website do đại lý đứng tên vận hành.",
        "Logo, tên xe, thông tin đại lý và giấy chứng nhận được dùng để giới thiệu chủ thể hoặc sản phẩm tương ứng. Giấy chứng nhận của đại lý không phải giấy chứng nhận cấp cho website hoặc cá nhân Huy Hoàng."
      ] },
      { heading: "Giá, nội dung và hình ảnh", paragraphs: [
        "Nội dung được tổng hợp và cập nhật để hỗ trợ tìm hiểu xe nhưng có thể còn sai sót hoặc chậm cập nhật. Giá, màu sắc, phụ kiện, trang bị, thời gian giao xe và ưu đãi cần được xác nhận theo phiên bản và thời điểm giao dịch.",
        "Ảnh minh họa và bộ chọn màu có thể khác xe thực tế do ánh sáng, màn hình, phụ kiện hoặc phiên bản. Thông số NEDC/WLTP và thời gian sạc theo điều kiện thử nghiệm không phải cam kết kết quả trong mọi tình huống sử dụng."
      ] },
      { heading: "Công cụ tính khoản vay", paragraphs: [
        "Công cụ trả góp chỉ mô phỏng theo số tiền, thời hạn và lãi suất bạn nhập. Kết quả sử dụng lãi tháng bằng lãi năm chia 12, giả định lãi suất cố định trong kỳ và làm tròn đến đồng; chưa tính phí, bảo hiểm hoặc thay đổi lãi suất.",
        "Kết quả không phải đề nghị cấp tín dụng, phê duyệt khoản vay hay cam kết của ngân hàng. Số tiền phải trả thực tế phụ thuộc hợp đồng, ngày tính lãi, cách làm tròn và chính sách của tổ chức cho vay."
      ] },
      { heading: "Dịch vụ và giao dịch bên ngoài", paragraphs: [
        "Website hỗ trợ kết nối tư vấn. Trách nhiệm của đại lý bán xe, nhà sản xuất hoặc tổ chức tín dụng được xác định theo hợp đồng và pháp luật áp dụng; cá nhân tư vấn không tự cam kết thay các đơn vị này.",
        "Khi mở liên kết ra ngoài website, bạn sử dụng dịch vụ theo điều khoản và chính sách của bên cung cấp. Hãy kiểm tra thông tin bên giao dịch trước khi gửi hồ sơ hoặc chuyển tiền."
      ] },
      { heading: "Giới hạn của tuyên bố này", paragraphs: [
        "Các nội dung trên không loại trừ trách nhiệm mà pháp luật không cho phép loại trừ, không miễn trách nhiệm đối với thông tin sai lệch do lỗi của người phụ trách và không tước quyền hợp pháp của người tiêu dùng.",
        `Nếu phát hiện thông tin cần sửa hoặc có vấn đề phát sinh, vui lòng liên hệ ${site.phone} hoặc ${site.email} để kiểm tra và xử lý.`
      ] }
    ]
  }
};
